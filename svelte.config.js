import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },

  extensions: ['.svelte', '.md'],

  preprocess: [
    mdsvex({
      extensions: ['.md'],
    }),
    vitePreprocess(),
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
