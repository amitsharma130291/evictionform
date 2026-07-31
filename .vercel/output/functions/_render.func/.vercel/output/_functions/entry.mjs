import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Bg5rsLJv.mjs';
import { manifest } from './manifest_ZjP5WFfR.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/generate-pdf.astro.mjs');
const _page2 = () => import('./pages/eviction-notice/non-payment-of-rent.astro.mjs');
const _page3 = () => import('./pages/eviction-notice/squatters.astro.mjs');
const _page4 = () => import('./pages/generate.astro.mjs');
const _page5 = () => import('./pages/non-renewal-lease-letter/template.astro.mjs');
const _page6 = () => import('./pages/non-renewal-lease-letter/to-tenant.astro.mjs');
const _page7 = () => import('./pages/non-renewal-lease-letter.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/generate-pdf.ts", _page1],
    ["src/pages/eviction-notice/non-payment-of-rent/index.astro", _page2],
    ["src/pages/eviction-notice/squatters/index.astro", _page3],
    ["src/pages/generate.astro", _page4],
    ["src/pages/non-renewal-lease-letter/template/index.astro", _page5],
    ["src/pages/non-renewal-lease-letter/to-tenant/index.astro", _page6],
    ["src/pages/non-renewal-lease-letter/index.astro", _page7],
    ["src/pages/index.astro", _page8]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "65639e4d-76be-48b6-87d2-dbba210625fe",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
