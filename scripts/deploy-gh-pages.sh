#!/usr/bin/env bash
# Build Vite app and replace gh-pages branch root with static dist output.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

npm run build

BUILD_DIR="$ROOT/dist"
STAGING_DIR="$ROOT/.deploy-staging"
rm -rf "$STAGING_DIR"
mkdir -p "$STAGING_DIR"
cp -R "$BUILD_DIR"/* "$STAGING_DIR"/

# Remove prior deploy artifacts and source-only files from branch root.
rm -rf assets favicon.ico favicon.svg icons.svg logo192.png logo512.png \
  ls_resume.pdf manifest.json old-site robots.txt wifi_radius_security_report.pdf \
  index.html src public node_modules scripts \
  package.json package-lock.json vite.config.js dist

cp -R "$STAGING_DIR"/* .
rm -rf "$STAGING_DIR"

echo "Deploy bundle ready at $ROOT — commit and push gh-pages."
