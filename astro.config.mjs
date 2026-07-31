import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [
    tailwind({
      configFile: './tailwind.config.ts',
    }),
  ],
  output: 'server',
  adapter: vercel(),
  site: 'https://evictionform.com',
});
