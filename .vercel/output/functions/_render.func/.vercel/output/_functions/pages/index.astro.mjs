/* empty css                                 */
import { a as createComponent, m as maybeRenderHead, e as renderTemplate, u as unescapeHTML, f as renderComponent } from '../chunks/astro/server_C2PtLxaS.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_DRcJN_Hf.mjs';
import { $ as $$Nav, a as $$Footer } from '../chunks/Footer_BLYIRww6.mjs';
import 'clsx';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="get-started" class="py-section-y bg-brand-bg"> <div class="mx-auto max-w-layout px-6 text-center"> <!-- H1 --> <h1 class="font-heading text-display-xl font-bold text-brand-heading leading-[1.1] tracking-[-0.02em] mb-6 max-w-3xl mx-auto animate-slide-up">
Free Eviction Notice Generator for US Landlords
</h1> <!-- Subheading --> <p class="font-body text-body-lg text-brand-body leading-[1.7] mb-8 max-w-xl mx-auto animate-slide-up" style="animation-delay: 60ms">
Answer a few questions, download a state-compliant PDF in minutes — no lawyer needed.
</p> <!-- Primary CTA --> <div class="flex justify-center mb-8 animate-fade-in" style="animation-delay: 120ms"> <a href="#form-teaser" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-cta hover:bg-brand-cta-dark text-white font-heading text-body-base font-semibold rounded-md shadow-md hover:shadow-lg transition-colors transition-shadow duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-cta focus:ring-offset-2 no-underline">
Create My Eviction Notice — Free
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"> <path d="M3.75 9h10.5M9.75 4.5L14.25 9l-4.5 4.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </a> </div> <!-- Trust bar --> <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 animate-fade-in" style="animation-delay: 180ms"> <span class="inline-flex items-center gap-2 font-body text-small font-semibold text-brand-muted"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"> <path d="M2.5 8.5l3.5 3.5 7.5-7.5" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>
All 50 states
</span> <span class="text-brand-border hidden sm:block" aria-hidden="true">|</span> <span class="inline-flex items-center gap-2 font-body text-small font-semibold text-brand-muted"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"> <path d="M2.5 8.5l3.5 3.5 7.5-7.5" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>
Lawyer-reviewed templates
</span> <span class="text-brand-border hidden sm:block" aria-hidden="true">|</span> <span class="inline-flex items-center gap-2 font-body text-small font-semibold text-brand-muted"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"> <path d="M2.5 8.5l3.5 3.5 7.5-7.5" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>
Instant PDF download
</span> </div> </div> </section>`;
}, "/home/node/.openclaw/workspaces/default/jobs/2026/Jul/evictionform-build/site/evictionform/src/components/Hero.astro", void 0);

const $$HowItWorks = createComponent(($$result, $$props, $$slots) => {
  const steps = [
    {
      number: "1",
      title: "Choose Your State",
      description: "Select the state where the rental property is located. Our templates automatically adjust to meet each state's specific legal requirements.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
      number: "2",
      title: "Fill In the Details",
      description: "Enter tenant information, the reason for eviction, and the notice period. Our guided form ensures you don't miss any required details.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
      number: "3",
      title: "Download Your PDF",
      description: "Get a court-ready, attorney-reviewed eviction notice as a professionally formatted PDF \u2014 ready to serve your tenant immediately.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><polyline points="7 10 12 15 17 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-section-y bg-brand-bg" aria-labelledby="how-it-works-heading"> <div class="mx-auto max-w-layout px-6"> <!-- Section header --> <div class="text-center mb-12"> <h2 id="how-it-works-heading" class="font-heading text-h2 font-semibold text-brand-heading leading-[1.3] tracking-[-0.01em] mb-3">
How It Works
</h2> <p class="font-body text-body-lg text-brand-muted leading-[1.7] max-w-md mx-auto">
Three simple steps to a legally valid eviction notice.
</p> </div> <!-- Step cards grid --> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> ${steps.map((step) => renderTemplate`<div class="group relative flex flex-col gap-4 p-card-pad bg-brand-surface border border-brand-border rounded-lg shadow-sm hover:shadow-card-hover transition-shadow duration-200 ease-in-out"> <!-- Step number badge --> <div class="flex items-center justify-center w-10 h-10 bg-brand-cta-light text-brand-cta rounded-md font-heading text-h4 font-bold"> ${step.number} </div> <!-- Step content --> <div class="flex flex-col gap-2"> <h3 class="font-heading text-h3 font-semibold text-brand-heading"> ${step.title} </h3> <p class="font-body text-body-base text-brand-body"> ${step.description} </p> </div> </div>`)} </div> </div> </section>`;
}, "/home/node/.openclaw/workspaces/default/jobs/2026/Jul/evictionform-build/site/evictionform/src/components/HowItWorks.astro", void 0);

const $$TrustSignals = createComponent(($$result, $$props, $$slots) => {
  const trustItems = [
    {
      label: "10,000+ landlords served",
      icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 1a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm0 9c-4 0-6 1.5-6 2.5V14h12v-1.5c0-1-2-2.5-6-2.5z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
      label: "State-specific templates",
      icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 1.5L2 4v4c0 3.5 2.5 6.5 6 7.5 3.5-1 6-4 6-7.5V4L8 1.5z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
      label: "100% free to generate",
      icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
      label: "Attorney-reviewed",
      icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="3" y="1" width="10" height="14" rx="1.5" stroke="currentColor" stroke-width="1.25"/><path d="M5.5 5.5h5M5.5 8h5M5.5 10.5h3" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/></svg>`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-section-y-sm bg-brand-surface-alt" aria-labelledby="trust-heading"> <div class="mx-auto max-w-layout px-6"> <h2 id="trust-heading" class="sr-only">
Why landlords trust EvictionForm
</h2> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center"> ${trustItems.map((item) => renderTemplate`<div class="inline-flex items-center gap-2 px-4 py-3 bg-brand-cta-light text-brand-cta text-small font-semibold rounded-full border border-brand-cta/20 whitespace-nowrap font-body"> <span>${unescapeHTML(item.icon)}</span> ${item.label} </div>`)} </div> </div> </section>`;
}, "/home/node/.openclaw/workspaces/default/jobs/2026/Jul/evictionform-build/site/evictionform/src/components/TrustSignals.astro", void 0);

const $$FormTeaser = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="get-started" class="py-section-y bg-brand-surface-alt" aria-labelledby="get-started-heading"> <div class="mx-auto max-w-content px-6 text-center"> <h2 id="get-started-heading" class="font-heading text-h2 font-semibold text-brand-heading mb-4">
Generate Your Eviction Notice — Free
</h2> <p class="font-body text-body-lg text-brand-body mb-6 max-w-lg mx-auto">
Answer a few questions about your situation. We'll generate a state-compliant eviction notice you can download as a PDF instantly.
</p> <div class="flex flex-wrap items-center justify-center gap-4 mb-8 font-body text-small text-brand-muted"> <span>✓ All 50 states</span> <span>✓ State-specific notice periods</span> <span>✓ Instant PDF download</span> <span>✓ 100% free</span> </div> <a href="/generate" class="inline-flex items-center gap-2 px-8 py-4 bg-brand-cta hover:bg-brand-cta-dark text-white font-heading text-body-base font-semibold rounded-md shadow-md transition-colors duration-200 no-underline">
Generate Your Free Notice →
</a> <p class="font-body text-caption text-brand-subtle mt-4">
No signup required. No email needed. Completely free.
</p> </div> </section>`;
}, "/home/node/.openclaw/workspaces/default/jobs/2026/Jul/evictionform-build/site/evictionform/src/components/FormTeaser.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Free Eviction Notice Generator | EvictionForm", "description": "Generate a free, state-compliant eviction notice in minutes. Download as PDF for $14.99. Covers all 50 US states." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "HowItWorks", $$HowItWorks, {})} ${renderComponent($$result2, "TrustSignals", $$TrustSignals, {})} ${renderComponent($$result2, "FormTeaser", $$FormTeaser, {})} </main> <section class="py-section-y bg-brand-surface-alt"> <div class="mx-auto max-w-layout px-6"> <div class="text-center mb-10"> <h2 class="font-heading text-h2 font-semibold text-brand-heading mb-3">Landlord Legal Guides</h2> <p class="font-body text-body-base text-brand-muted">State-specific guides written for US landlords — practical, accurate, attorney-reviewed.</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <a href="/non-renewal-lease-letter/" class="group flex flex-col gap-3 p-card-pad bg-brand-surface border border-brand-border rounded-lg shadow-sm hover:shadow-card-hover transition-shadow duration-200 no-underline"> <h3 class="font-heading text-h3 font-semibold text-brand-heading group-hover:text-brand-cta transition-colors duration-200">Non-Renewal Lease Letter</h3> <p class="font-body text-body-base text-brand-body">How to legally notify your tenant that their lease will not be renewed — with state-specific notice periods and templates.</p> <span class="font-heading text-label font-semibold text-brand-cta mt-auto">Read Guide →</span> </a> <a href="/non-renewal-lease-letter/template/" class="group flex flex-col gap-3 p-card-pad bg-brand-surface border border-brand-border rounded-lg shadow-sm hover:shadow-card-hover transition-shadow duration-200 no-underline"> <h3 class="font-heading text-h3 font-semibold text-brand-heading group-hover:text-brand-cta transition-colors duration-200">Non-Renewal Letter Template</h3> <p class="font-body text-body-base text-brand-body">A printable, court-tested non-renewal lease letter template with a field-by-field guide and pre-serve checklist.</p> <span class="font-heading text-label font-semibold text-brand-cta mt-auto">Read Guide →</span> </a> <a href="/non-renewal-lease-letter/to-tenant/" class="group flex flex-col gap-3 p-card-pad bg-brand-surface border border-brand-border rounded-lg shadow-sm hover:shadow-card-hover transition-shadow duration-200 no-underline"> <h3 class="font-heading text-h3 font-semibold text-brand-heading group-hover:text-brand-cta transition-colors duration-200">Non-Renewal Letter to Tenant</h3> <p class="font-body text-body-base text-brand-body">Exact wording, tone guidance, and delivery methods for writing a non-renewal letter addressed directly to your tenant.</p> <span class="font-heading text-label font-semibold text-brand-cta mt-auto">Read Guide →</span> </a> <a href="/eviction-notice/squatters/" class="group flex flex-col gap-3 p-card-pad bg-brand-surface border border-brand-border rounded-lg shadow-sm hover:shadow-card-hover transition-shadow duration-200 no-underline"> <h3 class="font-heading text-h3 font-semibold text-brand-heading group-hover:text-brand-cta transition-colors duration-200">Eviction Notice for Squatters</h3> <p class="font-body text-body-base text-brand-body">How to legally remove a squatter — including the squatter vs. trespasser distinction, police involvement, and adverse possession myths.</p> <span class="font-heading text-label font-semibold text-brand-cta mt-auto">Read Guide →</span> </a> <a href="/eviction-notice/non-payment-of-rent/" class="group flex flex-col gap-3 p-card-pad bg-brand-surface border border-brand-border rounded-lg shadow-sm hover:shadow-card-hover transition-shadow duration-200 no-underline"> <h3 class="font-heading text-h3 font-semibold text-brand-heading group-hover:text-brand-cta transition-colors duration-200">Eviction Notice: Non-Payment of Rent</h3> <p class="font-body text-body-base text-brand-body">The correct notice type, state-specific deadlines, and common mistakes that void a pay-or-quit notice before you even file.</p> <span class="font-heading text-label font-semibold text-brand-cta mt-auto">Read Guide →</span> </a> </div> </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/node/.openclaw/workspaces/default/jobs/2026/Jul/evictionform-build/site/evictionform/src/pages/index.astro", void 0);

const $$file = "/home/node/.openclaw/workspaces/default/jobs/2026/Jul/evictionform-build/site/evictionform/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
