import { c as createAstro, a as createComponent, b as addAttribute, r as renderHead, d as renderSlot, e as renderTemplate } from './astro/server_C2PtLxaS.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://evictionform.com");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    title = "Free Eviction Notice Generator | EvictionForm",
    description = "Generate a free, state-compliant eviction notice in minutes. Download as PDF for $14.99. Covers all 50 US states.",
    ogTitle = "Free Eviction Notice Generator | EvictionForm",
    ogDescription = "Generate a free, state-compliant eviction notice in minutes. Download as PDF for $14.99. Covers all 50 US states.",
    canonicalUrl = "https://evictionform.com"
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonicalUrl, "href")}><!-- Open Graph --><meta property="og:title"${addAttribute(ogTitle, "content")}><meta property="og:description"${addAttribute(ogDescription, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalUrl, "content")}><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Google Fonts: Sora + Inter --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-brand-bg min-h-screen"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/node/.openclaw/workspaces/default/jobs/2026/Jul/evictionform-build/site/evictionform/src/layouts/Base.astro", void 0);

export { $$Base as $ };
