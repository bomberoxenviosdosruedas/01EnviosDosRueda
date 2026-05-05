import fs from 'fs';
import path from 'path';

interface Rule {
  id: string;
  title: string;
  impact: string;
  impactDescription?: string;
  tags: string[];
  content: string;
  prefix: string;
  file: string;
}

interface Metadata {
  version: string;
  organization: string;
  abstract: string;
}

const RULES_DIR = 'rules';
const SECTIONS_FILE = path.join(RULES_DIR, '_sections.md');
const METADATA_FILE = 'metadata.json';
const OUTPUT_FILE = 'AGENTS.md';
const TEST_CASES_FILE = 'test-cases.json';

function parseFrontmatter(content: string) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, body: content };

  const fm = match[1];
  const body = match[2];
  const frontmatter: any = {};
  fm.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();
      frontmatter[key] = value;
    }
  });
  return { frontmatter, body };
}

function extractCodeBlocks(content: string) {
  const blocks = content.split('```typescript');
  let incorrect: string | null = null;
  let correct: string | null = null;

  for (let i = 0; i < blocks.length; i++) {
    const prevText = blocks[i];
    if (prevText.includes('**Incorrect')) {
      const codePart = blocks[i+1];
      if (codePart) {
        incorrect = codePart.split('```')[0].trim();
      }
    } else if (prevText.includes('**Correct')) {
      const codePart = blocks[i+1];
      if (codePart) {
        correct = codePart.split('```')[0].trim();
      }
    }
  }

  return { incorrect, correct };
}

function loadRules() {
  const files = fs.readdirSync(RULES_DIR).filter(f => f.endsWith('.md') && !f.startsWith('_'));
  const rules: Rule[] = [];

  files.forEach(file => {
    const content = fs.readFileSync(path.join(RULES_DIR, file), 'utf-8');
    const { frontmatter, body } = parseFrontmatter(content);
    const prefix = file.split('-')[0];

    // Remove the first H2 title from the body if it matches the frontmatter title to avoid duplicates
    let cleanedBody = body.trim();
    if (frontmatter.title) {
      const titleRegex = new RegExp(`^## ${frontmatter.title}\\s*`, 'i');
      cleanedBody = cleanedBody.replace(titleRegex, '');
    }

    rules.push({
      id: '', // Will be generated
      title: frontmatter.title || file,
      impact: frontmatter.impact || 'MEDIUM',
      impactDescription: frontmatter.impactDescription,
      tags: frontmatter.tags ? frontmatter.tags.split(',').map((t: string) => t.trim()) : [],
      content: cleanedBody.trim(),
      prefix: prefix,
      file: file
    });
  });
  return rules;
}

function validate(rules: Rule[]) {
  let hasErrors = false;
  rules.forEach(rule => {
    if (!rule.title || rule.title === rule.file) {
      console.error(`Error in ${rule.file}: Missing title in frontmatter`);
      hasErrors = true;
    }
    const { incorrect, correct } = extractCodeBlocks(rule.content);
    if (!incorrect) {
      console.error(`Error in ${rule.file}: Missing 'Incorrect' code block`);
      hasErrors = true;
    }
    if (!correct) {
      console.error(`Error in ${rule.file}: Missing 'Correct' code block`);
      hasErrors = true;
    }
  });
  if (hasErrors) {
    process.exit(1);
  }
  console.log('Validation passed!');
}

function build() {
  const metadata: Metadata = JSON.parse(fs.readFileSync(METADATA_FILE, 'utf-8'));
  const sectionsContent = fs.readFileSync(SECTIONS_FILE, 'utf-8');
  const sectionLines = sectionsContent.split('\n').filter(l => l.startsWith('- `'));

  const sections = sectionLines.map(line => {
    const match = line.match(/- `([^`]+)`:\s*(.*)\s*\(Section (\d+)\)/);
    if (!match) return null;
    return {
      prefix: match[1],
      title: match[2],
      number: parseInt(match[3]),
    };
  }).filter(Boolean) as { prefix: string, title: string, number: number }[];

  const rules = loadRules();
  sections.sort((a, b) => a.number - b.number);

  const now = new Date();
  const dateStr = now.toLocaleString('en-US', { month: 'long', year: 'numeric' });

  let agentsMd = `# React Best Practices\n\n`;
  agentsMd += `Version ${metadata.version}\n`;
  agentsMd += `${metadata.organization} ${dateStr}\n\n`;
  agentsMd += `## Abstract\n\n${metadata.abstract}\n\n`;

  const testCases: any[] = [];

  sections.forEach(section => {
    agentsMd += `## ${section.number}. ${section.title}\n\n`;

    const sectionRules = rules
      .filter(r => r.prefix === section.prefix)
      .sort((a, b) => a.title.localeCompare(b.title));

    sectionRules.forEach((rule, index) => {
      rule.id = `${section.number}.${index + 1}`;
      agentsMd += `### ${rule.id} ${rule.title}\n\n`;
      agentsMd += `**Impact:** ${rule.impact}${rule.impactDescription ? ` - ${rule.impactDescription}` : ''}\n`;
      agentsMd += `**Tags:** ${rule.tags.join(', ')}\n\n`;
      agentsMd += `${rule.content}\n\n`;

      const { incorrect, correct } = extractCodeBlocks(rule.content);
      if (incorrect && correct) {
        testCases.push({
          id: rule.id,
          title: rule.title,
          incorrect,
          correct
        });
      }
    });
  });

  fs.writeFileSync(OUTPUT_FILE, agentsMd);
  fs.writeFileSync(TEST_CASES_FILE, JSON.stringify(testCases, null, 2));

  console.log(`Generated ${OUTPUT_FILE} and ${TEST_CASES_FILE}`);
}

const args = process.argv.slice(2);
if (args.includes('--validate')) {
  validate(loadRules());
} else if (args.includes('--extract-tests')) {
  build(); // Currently build generates both, but we can call it here for the flag
  console.log('Tests extracted');
} else {
  build();
}
