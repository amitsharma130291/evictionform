import { a as createComponent, m as maybeRenderHead, e as renderTemplate } from './astro/server_C2PtLxaS.mjs';
import 'kleur/colors';
import 'clsx';

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-[200] bg-white/95 backdrop-blur-sm border-b border-brand-border shadow-xs"> <nav class="mx-auto flex items-center justify-between px-6 py-4 max-w-layout" aria-label="Main navigation"> <!-- Logo --> <a href="/" class="font-heading text-h3 font-bold text-brand-heading hover:text-brand-cta transition-colors duration-200 no-underline" aria-label="EvictionForm home">
EvictionForm
</a> <!-- CTA --> <a href="/generate" class="inline-flex items-center justify-center gap-2 px-btn-x py-btn-y bg-brand-cta hover:bg-brand-cta-dark text-white font-heading text-label font-semibold rounded-md shadow-sm hover:shadow-md transition-colors transition-shadow duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-cta focus:ring-offset-2 no-underline">
Generate Free Notice
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"> <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </a> </nav> </header>`;
}, "/home/node/.openclaw/workspaces/default/jobs/2026/Jul/evictionform-build/site/evictionform/src/components/Nav.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-neutral-900 border-t border-neutral-800 mt-section-y"> <div class="mx-auto max-w-layout px-6 pt-8 pb-4 border-b border-neutral-800"> <p class="font-heading text-small font-semibold text-neutral-400 mb-3">Landlord Guides</p> <nav class="flex flex-wrap gap-x-6 gap-y-2"> <a href="/non-renewal-lease-letter/" class="font-body text-small text-neutral-400 hover:text-white transition-colors duration-200 no-underline">Non-Renewal Lease Letter</a> <a href="/non-renewal-lease-letter/template/" class="font-body text-small text-neutral-400 hover:text-white transition-colors duration-200 no-underline">Non-Renewal Template</a> <a href="/non-renewal-lease-letter/to-tenant/" class="font-body text-small text-neutral-400 hover:text-white transition-colors duration-200 no-underline">Letter to Tenant</a> <a href="/eviction-notice/squatters/" class="font-body text-small text-neutral-400 hover:text-white transition-colors duration-200 no-underline">Squatter Eviction Notice</a> <a href="/eviction-notice/non-payment-of-rent/" class="font-body text-small text-neutral-400 hover:text-white transition-colors duration-200 no-underline">Non-Payment Eviction Notice</a> </nav> </div> <div class="mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-8 max-w-layout"> <!-- Brand --> <a href="/" class="font-heading text-body-base font-bold text-white hover:text-brand-cta transition-colors duration-200 no-underline">
EvictionForm
</a> <!-- Links --> <nav aria-label="Footer navigation"> <ul class="flex flex-wrap items-center gap-x-6 gap-y-2 list-none m-0 p-0"> <li> <a href="/privacy" class="font-body text-small text-neutral-400 hover:text-white transition-colors duration-200 no-underline">
Privacy Policy
</a> </li> <li> <a href="/terms" class="font-body text-small text-neutral-400 hover:text-white transition-colors duration-200 no-underline">
Terms of Service
</a> </li> <li> <a href="/contact" class="font-body text-small text-neutral-400 hover:text-white transition-colors duration-200 no-underline">
Contact
</a> </li> </ul> </nav> <!-- Copyright --> <p class="font-body text-caption text-neutral-500 whitespace-nowrap">
&copy; 2026 EvictionForm. Not legal advice.
</p> </div> </footer>`;
}, "/home/node/.openclaw/workspaces/default/jobs/2026/Jul/evictionform-build/site/evictionform/src/components/Footer.astro", void 0);

export { $$Nav as $, $$Footer as a };
