import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://Trqc-Nam.github.io',
  base: '/truong-quoc-nam-portfolio/',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
