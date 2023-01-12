# flatpickles.com

## To do
* Cleanup Writing index with eager glob import (rename some stuff too)
* Notes and Such
    * Slug page, w/ links from main page
    * Pagination for main page (non-eager glob import)
    * Display only part of long notes?
    * Consolidate writing display and note display?
* Smooth gradients in:
    * MediaOverlay
    * HighlightCard
* About page content
* Slug page for text
    * Hide header when scrolling down (maybe within HomeLinkOverlay)
* Slug page for media
    * Hide header & footer between taps & mouse movement
    * Content loading indicator
* Finalize fonts
    * Buy Hobeaux
    * Experiment with different weights
    * Include only the weights that are actually used
* Error pages (same one for everything?)
* SEO improvements
    * [SvelteKit docs](https://kit.svelte.dev/docs/seo)
    * robots.txt
* Adjust body class approach [this way](https://github.com/sveltejs/svelte/issues/3105#issuecomment-1373889014)
* Adjust pixel-sized page width calculations to em values
* Final polish
    * Remove/address todos & questions
    * Sort imports
    * Remove SASS (unless used by then)
* Publishing
    * Move archived webapps to Vercel
    * Redirect flatpickles.com URL to vercel
    * Close out GitHub pages
    * Publish new repository as public (why not)
* Smooth transitions between pages
* Update Spark effects and add links to archive
* Maybe use Vite imports for media assets
* Anchor page for media
* Anchor page for text

## Known problems
* Text doesn't look quite centered vertically in project list entries
* Header image loads after page on mobile
* Header image presented small first, then sized up (one frame)
* Flash of unstyled content even when loading on Vercel?
* Occasional "Not found: /favicon.ico" errors
* Generating full index requires loading all writing .md files (+100ms)
* ProjectList responsive design could be improved: CSS grid maybe, for fewer magic numbers.
* Double render (SSR + CSR) locally (seems expected - but why?)

## Packages added
* npm i -D @sveltejs/adapter-vercel
* npm i -D mdsvex
* npm i -D svelte-body 
* ress i ress
* npm i -D sass 

## Questions
* Comparison with TypeScript enum - triple equals? // ??
* TypeScript warning in media page.svelte
* Implications of SSR vs CSR in SvelteKit?
* What's the best way to set a different body color for different routes? svelte-body works, but renders with a flash; this is currently obscured by a full-height div wrapper of the same color. I'm not sure if this works as expected with both CSR & SSR.
* Does specifying page content via component props (i.e. JS) interfere with the benefits of SSR, e.g. SEO?
* What's the best way to check if an enum type is one of several different options?
* Why doesn't import.meta.glob return a promise, while import does?
* `const { metadata, default: component} = module as any;` -- why type only for second?