---
title: Sass in a SvelteKit Project
date: 3/22/23
---

The [Svelte SCSS adder](https://github.com/svelte-add/scss) is giving me npm dependency errors with the latest SvelteKit version, and also doesn't work well with TypeScript projects. We should probably update the adder... but until then, here's a quick record of how I'm adding [Sass](https://sass-lang.com/) to new SvelteKit projects.

First, let's add Sass as a dev dependency: `npm install -D sass`

Next, let's create a few SCSS files. Inspired by the aforementioned adder, I like to create `src/app.scss` and `src/variables.scss`. Out of the box, we should already be able to import these files directly, or set up `<style lang="scss">` blocks within our Svelte files.

To use `src/app.scss` at the top level of our app, we can import it in our highest SvelteKit layout file, e.g. within `src/routes/+layout.svelte`:

```
<script>
	import '../app.scss';
</script>

<slot />
```

We also want to be able to access the contents of `variables.scss` from any style files or blocks throughout our project. We can do this by adding a Vite preprocessing step. Let's update `vite.config.ts` like so:

```
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;'
			}
		}
	}
});
```

<!---
Additionally, if we want to make a similar update in the Svelte preprocessor, we can configure `svelte.config.js` like so:

```
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
        preprocess({
            scss: {
                prependData: '@use "src/variables.scss" as *;'
            }
        })
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
```
-->

And just like that, we've got Sass set up and ready to rock! We can define and use global variables in our variables file, set up global styles in our app file, and further use Sass functionality throughout our project.

_These steps were working for me as of March 22, 2023. It's quite possible that this won't be relevant forever._
