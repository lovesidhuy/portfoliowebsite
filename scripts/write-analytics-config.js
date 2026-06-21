import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const version = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8')).version;
const output = `window.PORTFOLIO_ANALYTICS = ${JSON.stringify({ site_version: version }, null, 2)};\n`;

const targets = [
  path.join(__dirname, '../public/analytics-config.js'),
  path.join(__dirname, '../public/old-site/analytics-config.js')
];

targets.forEach((filePath) => {
  fs.writeFileSync(filePath, output);
  console.log(`Wrote ${filePath} (v${version})`);
});
