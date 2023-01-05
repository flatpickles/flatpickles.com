# flatpickles.com

## Known Issues
* Flash of unstyled content even when loading on Vercel?
* Double render (SSR + CSR) locally (seems expected - but why?)

## List
* Slug page for media
    * Header & footer layout
    * Header & footer gradient backgrounds
    * Header & footer text & links
* Anchor page for media
* Error page for media
* Slug page for text (including md formatting)
* Anchor page for text
* Error page for media
* Homepage content listing
    * Switch to CSS grid display
    * Click anywhere on a row to visit a link
    * Alternating colors (w/ rounding)
    * Hover colors?
    * Responsive sizing (small screens)
    * Sort by property type
* Move archived webapps to Vercel
* Notes page
* Global layout tuning
* Global typography tuning (space, weight)
* Main page(s) header sizing: FOUC
* Smooth transitions between pages
* Update Spark effects and add links to archive
* SEO improvements - [SvelteKit docs](https://kit.svelte.dev/docs/seo)

## Packages added
* npm i @leveluptuts/svelte-fit
* npm i svelte-body -D
* ress i ress
* npm i sass -D

## Questions
* Implications of SSR vs CSR in SvelteKit?
* What's the best way to set a different body color for different routes? svelte-body works, but renders with a flash; this is currently obscured by a full-height div wrapper of the same color. I'm not sure if this works as expected with both CSR & SSR.
* Does specifying page content via component props (i.e. JS) interfere with the benefits of SSR, e.g. SEO?
* What's the best way to check if an enum type is one of several different options?