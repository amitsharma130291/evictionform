import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [
    tailwind({
      configFile: './tailwind.config.ts',
    }),
  ],
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  site: 'https://evictionform.com',
});
