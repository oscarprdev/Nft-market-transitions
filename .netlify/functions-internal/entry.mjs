import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_cfac0e03.mjs';
import './chunks/astro_879e1af5.mjs';
import './chunks/pages/image-endpoint_8f919d62.mjs';
import './chunks/astro-assets-services_491ce0c5.mjs';
import './chunks/pages/_id__82b2cb0c.mjs';
/* empty css                                */import 'os';
import 'fs';
import 'url';
import 'path';

const _page0  = () => import('./chunks/image-endpoint_20cf864c.mjs');
const _page1  = () => import('./chunks/index_94c702b7.mjs');
const _page2  = () => import('./chunks/_id__c464c513.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.2.0/node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/[id].astro", _page2]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
