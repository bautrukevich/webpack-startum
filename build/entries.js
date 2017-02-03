import fs from 'fs';
import path from 'path';

const pages = '../src/pages';
const pagesAbsolute = path.resolve(__dirname, pages);
const components = '../src/components';

let entries = [
  `${components}/index.js`,
  `${components}/index.pcss`
];

const files = fs.readdirSync(pagesAbsolute, 'utf8');

files.forEach(file => {
  let filePath = `${pagesAbsolute}/${file}`;

  let isDirectory = fs.lstatSync(filePath).isDirectory();

  if (!isDirectory) {
    entries.push(`${pages}/${file}`);
  }
});

export default entries;
