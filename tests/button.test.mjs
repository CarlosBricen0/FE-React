import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { buildSync } from 'esbuild';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
const require = createRequire(import.meta.url);
function load(entry) {
  const { outputFiles } = buildSync({ entryPoints: [entry], bundle: true, write: false, format: 'cjs', platform: 'node', external: ['react', 'react-dom'], loader: { '.module.css': 'empty', '.css': 'empty', '.svg': 'dataurl', '.png': 'dataurl', '.jpg': 'dataurl' }, logLevel: 'silent' });
  const module = { exports: {} };
  new Function('require','module','exports',outputFiles[0].text)(require,module,module.exports);
  return module.exports;
}
const { Button } = load('stories/atoms/Button/Button.tsx');
test('existing label API continues to render and defaults to non-submitting button', () => {
  const html = renderToStaticMarkup(React.createElement(Button, { label: 'Buy', color: 'white' }));
  assert.match(html, />Buy<\/button>/); assert.match(html, /type="button"/);
});
test('native props, children and disabled state work in the new consumer', () => {
  const html = renderToStaticMarkup(React.createElement(Button, { color: 'inherit', disabled: true, type: 'submit', 'data-testid': 'checkout' }, 'Checkout'));
  assert.match(html, />Checkout<\/button>/); assert.match(html, /disabled=""/); assert.match(html, /type="submit"/); assert.match(html, /data-testid="checkout"/);
});
test('native accessible labels are preserved for icon buttons', () => {
  const html = renderToStaticMarkup(React.createElement(Button, { color: 'inherit', 'aria-label': 'Like post' }, '♡'));
  assert.match(html, /aria-label="Like post"/);
});
