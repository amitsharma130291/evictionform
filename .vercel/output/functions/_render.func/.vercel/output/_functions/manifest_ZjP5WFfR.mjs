import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DCkbgpru.mjs';
import 'es-module-lexer';
import { h as decodeKey } from './chunks/astro/server_C2PtLxaS.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/node/.openclaw/workspaces/default/jobs/2026/Jul/evictionform-build/site/evictionform/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/generate-pdf","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/generate-pdf\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"generate-pdf","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/generate-pdf.ts","pathname":"/api/generate-pdf","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CULdYEBh.css"}],"routeData":{"route":"/eviction-notice/non-payment-of-rent","isIndex":true,"type":"page","pattern":"^\\/eviction-notice\\/non-payment-of-rent\\/?$","segments":[[{"content":"eviction-notice","dynamic":false,"spread":false}],[{"content":"non-payment-of-rent","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/eviction-notice/non-payment-of-rent/index.astro","pathname":"/eviction-notice/non-payment-of-rent","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CULdYEBh.css"}],"routeData":{"route":"/eviction-notice/squatters","isIndex":true,"type":"page","pattern":"^\\/eviction-notice\\/squatters\\/?$","segments":[[{"content":"eviction-notice","dynamic":false,"spread":false}],[{"content":"squatters","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/eviction-notice/squatters/index.astro","pathname":"/eviction-notice/squatters","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CULdYEBh.css"},{"type":"external","src":"/_astro/generate.CgQmJCem.css"},{"type":"inline","content":".notice-card-label[data-astro-cid-3liy6dkl] input[data-astro-cid-3liy6dkl]:checked+.notice-card[data-astro-cid-3liy6dkl]{border-color:#059669;background-color:#d1fae5}\n"}],"routeData":{"route":"/generate","isIndex":false,"type":"page","pattern":"^\\/generate\\/?$","segments":[[{"content":"generate","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/generate.astro","pathname":"/generate","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CULdYEBh.css"}],"routeData":{"route":"/non-renewal-lease-letter/template","isIndex":true,"type":"page","pattern":"^\\/non-renewal-lease-letter\\/template\\/?$","segments":[[{"content":"non-renewal-lease-letter","dynamic":false,"spread":false}],[{"content":"template","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/non-renewal-lease-letter/template/index.astro","pathname":"/non-renewal-lease-letter/template","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CULdYEBh.css"}],"routeData":{"route":"/non-renewal-lease-letter/to-tenant","isIndex":true,"type":"page","pattern":"^\\/non-renewal-lease-letter\\/to-tenant\\/?$","segments":[[{"content":"non-renewal-lease-letter","dynamic":false,"spread":false}],[{"content":"to-tenant","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/non-renewal-lease-letter/to-tenant/index.astro","pathname":"/non-renewal-lease-letter/to-tenant","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CULdYEBh.css"}],"routeData":{"route":"/non-renewal-lease-letter","isIndex":true,"type":"page","pattern":"^\\/non-renewal-lease-letter\\/?$","segments":[[{"content":"non-renewal-lease-letter","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/non-renewal-lease-letter/index.astro","pathname":"/non-renewal-lease-letter","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CULdYEBh.css"},{"type":"external","src":"/_astro/generate.CgQmJCem.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://evictionform.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/node/.openclaw/workspaces/default/jobs/2026/Jul/evictionform-build/site/evictionform/src/pages/eviction-notice/non-payment-of-rent/index.astro",{"propagation":"none","containsHead":true}],["/home/node/.openclaw/workspaces/default/jobs/2026/Jul/evictionform-build/site/evictionform/src/pages/eviction-notice/squatters/index.astro",{"propagation":"none","containsHead":true}],["/home/node/.openclaw/workspaces/default/jobs/2026/Jul/evictionform-build/site/evictionform/src/pages/generate.astro",{"propagation":"none","containsHead":true}],["/home/node/.openclaw/workspaces/default/jobs/2026/Jul/evictionform-build/site/evictionform/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/node/.openclaw/workspaces/default/jobs/2026/Jul/evictionform-build/site/evictionform/src/pages/non-renewal-lease-letter/index.astro",{"propagation":"none","containsHead":true}],["/home/node/.openclaw/workspaces/default/jobs/2026/Jul/evictionform-build/site/evictionform/src/pages/non-renewal-lease-letter/template/index.astro",{"propagation":"none","containsHead":true}],["/home/node/.openclaw/workspaces/default/jobs/2026/Jul/evictionform-build/site/evictionform/src/pages/non-renewal-lease-letter/to-tenant/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/api/generate-pdf@_@ts":"pages/api/generate-pdf.astro.mjs","\u0000@astro-page:src/pages/eviction-notice/non-payment-of-rent/index@_@astro":"pages/eviction-notice/non-payment-of-rent.astro.mjs","\u0000@astro-page:src/pages/eviction-notice/squatters/index@_@astro":"pages/eviction-notice/squatters.astro.mjs","\u0000@astro-page:src/pages/generate@_@astro":"pages/generate.astro.mjs","\u0000@astro-page:src/pages/non-renewal-lease-letter/index@_@astro":"pages/non-renewal-lease-letter.astro.mjs","\u0000@astro-page:src/pages/non-renewal-lease-letter/template/index@_@astro":"pages/non-renewal-lease-letter/template.astro.mjs","\u0000@astro-page:src/pages/non-renewal-lease-letter/to-tenant/index@_@astro":"pages/non-renewal-lease-letter/to-tenant.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/node/.openclaw/workspaces/default/jobs/2026/Jul/evictionform-build/site/evictionform/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_ZjP5WFfR.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.CULdYEBh.css","/_astro/generate.CgQmJCem.css","/favicon.svg","/robots.txt","/sitemap.xml"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"cvmIcQJyxWJVYSabu3vI85JP8bC/fculU8ycDR6U6ek=","experimentalEnvGetSecretEnabled":false});

export { manifest };
