---
title: PostCSS in a SvelteKit Project
date: 3/22/23
archived: true
---

Alright I just [wrote](/note/svelte-scss) about adding Sass to a SvelteKit project, and now that I'm trying to add PostCSS (in order to use [this awesome easing gradient plugin](https://www.npmjs.com/package/postcss-easing-gradients)), I'm having the same NPM dependency issues with the [SvelteKit PostCSS Adder](https://github.com/svelte-add/postcss). This probably means I'm doing something wrong, and definitely means I should try using Tailwind for my next project, but nonetheless I wanted to document here how I eventually ended up getting PostCSS working.

First, I installed the needed libraries, and the gradient library I'm using via PostCSS:

```
npm i postcss
npm i postcss-load-config
npm i postcss-easing-gradients
```

I then [updated my svelte.config.js](https://github.com/flatpickles/convergence/commit/af0ef398e8b185ac86ef310cdb7178342b3bfbc3#diff-6317e218ea40a2a9b47af98e100e81c06f9c0abff66737e6ca06ec4b29402242) to use the extremely handy [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess), set up the plugin config in a [new postcss.config.cjs file](https://github.com/flatpickles/convergence/blob/main/postcss.config.cjs), and started using [easing gradients](https://larsenwork.com/easing-gradients/) in my SCSS code. It works like a charm, and these gradients look extremely stylish. It'll be awesome to have native CSS support for this sort of thing eventually!
