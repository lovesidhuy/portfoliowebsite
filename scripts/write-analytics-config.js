import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const version = pkg.version;

const contents = `window.__PORTFOLIO_ANALYTICS__ = { site_version: '${version}' };\n`;

for (const target of [
  path.join(root, 'public/analytics-config.js'),
  path.join(root, 'public/old-site/analytics-config.js'),
]) {
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, contents);
  console.log(`Wrote ${target} (v${version})`);
}
