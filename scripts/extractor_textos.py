import os
import re

# Configuración de rutas y exclusiones
SCAN_PATHS = ['src/app', 'src/components']
BLACKLIST = [
    'src/app/admin',
    'src/components/admin',
    'src/app/repartidor',
    'src/components/repartidor',
    'node_modules',
    '.next',
    'dist'
]

OUTPUT_FILE = 'inventario_textos.md'

# Regex para capturar texto entre etiquetas JSX: >Texto<
# Usamos re.DOTALL para que el punto coincida con saltos de línea y capturemos textos multi-línea
JSX_TEXT_REGEX = re.compile(r'>([^<>{}]*)<', re.DOTALL)

def is_blacklisted(path):
    """Verifica si la ruta actual debe ser ignorada de forma robusta."""
    norm_path = os.path.normpath(path).replace('\\', '/')
    for item in BLACKLIST:
        item_norm = os.path.normpath(item).replace('\\', '/')
        # Coincidencia exacta, al inicio de la ruta, o como un segmento intermedio
        if (norm_path == item_norm or
            norm_path.startswith(item_norm + '/') or
            f'/{item_norm}/' in f'/{norm_path}/'):
            return True
    return False

def clean_extracted_text(text):
    """Limpia el texto extraído y filtra ruidos de código."""
    # Eliminar espacios en blanco y saltos de línea sobrantes
    text = ' '.join(text.split()).strip()

    if not text:
        return None

    # Filtros para evitar ruido de lógica JS/TS (operadores, keywords, etc.)
    code_indicators = [
        '=>', '&&', '||', '===', '==', '!=', ';', 'const ', 'let ', 'var ',
        'import ', 'export ', 'return ', 'type ', 'interface ', 'from ',
        '.map(', '.filter(', '.find(', ' ? ', ' : '
    ]
    if any(indicator in text for indicator in code_indicators):
        return None

    # Ignorar si parece un ID largo, un hash o una variable de entorno
    if re.match(r'^[A-Z0-9_]+$', text) and len(text) > 3:
        return None

    # Ignorar si parece solo puntuación o caracteres sueltos de código
    if re.match(r'^[ \t\n\r\f\v,.!?:;"\'()\[\]{}|\\/ \- + * = < > % & ^ $ # @ ` ~]*$', text):
        return None

    return text

def extract_text_from_file(filepath):
    """Extrae textos legibles de un archivo .tsx o .jsx considerando multi-línea."""
    extracted_data = []
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

            # Buscamos todas las coincidencias en el contenido completo
            for match in JSX_TEXT_REGEX.finditer(content):
                raw_text = match.group(1)
                cleaned = clean_extracted_text(raw_text)

                if cleaned:
                    # Calcular número de línea basado en la posición del match
                    line_num = content.count('\n', 0, match.start()) + 1
                    extracted_data.append((line_num, cleaned))
    except Exception as e:
        print(f"Error procesando {filepath}: {e}")

    return extracted_data

def main():
    report_content = "# Inventario de Textos (Copywriting)\n\n"
    report_content += "Este reporte fue generado automáticamente extrayendo el contenido entre etiquetas JSX.\n\n"

    found_files = 0

    for root_path in SCAN_PATHS:
        if not os.path.exists(root_path):
            continue

        for root, dirs, files in os.walk(root_path):
            if is_blacklisted(root):
                continue

            for file in files:
                if file.endswith(('.tsx', '.jsx')):
                    filepath = os.path.join(root, file)

                    if is_blacklisted(filepath):
                        continue

                    texts = extract_text_from_file(filepath)

                    if texts:
                        found_files += 1
                        rel_path = os.path.relpath(filepath, '.')
                        report_content += f"### Archivo: `{rel_path}`\n"
                        # Eliminar duplicados cercanos en el mismo archivo (opcional)
                        seen = set()
                        for line_num, text in texts:
                            if text not in seen:
                                report_content += f"- Línea {line_num}: \"{text}\"\n"
                                seen.add(text)
                        report_content += "\n"

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(report_content)

    print(f"Proceso completado. Se generó '{OUTPUT_FILE}' con textos de {found_files} archivos.")

if __name__ == "__main__":
    main()
