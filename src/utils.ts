import path from 'path';
import { readdir, readFile } from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const modulesPath = path.join(__dirname, 'modules');

export const getTypeDefs = async () => {
  try {
    let schemasArr = [];
    const schemas = await readdir(modulesPath, { withFileTypes: true });

    for (let item of schemas) {
      const schemaFile = path.join(modulesPath, item.name, 'schemas', item.name + '.gql');
      const schema = await readFile(schemaFile, 'utf8');
      schemasArr.push(schema);
    }
    return schemasArr.join('\n');

  } catch (err) {
    console.error(err);
  }
}