import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  // Enable components.
  integrations: [
    vue({
      jsx: true,
      appEntrypoint: '/src/pages/_app',
    }),
    tailwind(),
  ],
  vite: {
    plugins: [vue()],
  },
  output: 'server',
  adapter: vercel(),
});
