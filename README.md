# flatpickles.com

## Issues
* Header image loads after page on mobile

## To do
* favicon
* HomeLink dedicated smaller image + Vite import
* Slug page for text
    * Hide header when scrolling down (maybe within HomeLinkOverlay)
* Slug page for media
    * Smooth gradient backgrounds
    * Header & footer text colors
    * Hide header & footer between taps & mouse movement
    * Content loading indicator
* Clean up
    * Text colors/opacity throughout
    * Text link style/color
    * layout architecture for sub-sections
* Error page for media
* Error page for media
* About page content
* Hover behavior for ProjectList?
* Move archived webapps to Vercel
* Notes page
* Smooth transitions between pages
* Update Spark effects and add links to archive
* SEO improvements - [SvelteKit docs](https://kit.svelte.dev/docs/seo)
* Adjust body class approach [this way](https://github.com/sveltejs/svelte/issues/3105#issuecomment-1373889014)
* Anchor page for media
* Anchor page for text
* Maybe use Vite imports for media assets`

## Low pri issues
* Header image presented small first, then sized up (one frame)
* Flash of unstyled content even when loading on Vercel?
* Double render (SSR + CSR) locally (seems expected - but why?)
* Generating full index requires loading all writing .md files (+100ms)
* ProjectList responsive design could be improved: CSS grid maybe, for fewer magic numbers.

## Packages added
* npm i -D mdsvex
* npm i svelte-body -D
* ress i ress
* npm i sass -D

## Questions
* Comparison with TypeScript enum - triple equals?
* TypeScript warning in media page.svelte
* Implications of SSR vs CSR in SvelteKit?
* What's the best way to set a different body color for different routes? svelte-body works, but renders with a flash; this is currently obscured by a full-height div wrapper of the same color. I'm not sure if this works as expected with both CSR & SSR.
* Does specifying page content via component props (i.e. JS) interfere with the benefits of SSR, e.g. SEO?
* What's the best way to check if an enum type is one of several different options?