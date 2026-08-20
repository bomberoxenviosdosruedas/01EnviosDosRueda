import eslintConfigNext from 'eslint-config-next';

export default [
  {
    ignores: [
      '.claude/**',
      '.hermes/**',
      '.agents/**',
      '.next/**',
      'docs/**',
      'generated/**',
      'node_modules/**',
    ],
  },
  ...eslintConfigNext,
];
