# flatpickles.com

## Known Issues
* Flash of unstyled content even when loading on Vercel?
* Double render (SSR + CSR) locally (seems expected - but why?)

## List
* Content table
    * Switch to CSS grid display
    * Click anywhere on a row to visit a link
    * Alternating colors (w/ rounding)
    * Hover colors?
    * Responsive sizing (small screens)
    * Sort by property type
* API:
    * Data model
    * Content list w/ metadata (by type)
    * Asset retrieval
* Media page
* Writing page (w/ Markdown)
* Notes page
* Global layout tuning
* Global typography tuning (space, weight)
* Main page(s) header sizing: FOUC
* Smooth transitions between pages
* Figure out implications of SSR vs CSR in SvelteKit
* Figure out data schema (file system) for content
* Work on slug-based pages for each piece of data

# To consider
* Improvements for title sizing: remove flash at small size
* Typography alignment for title text
* SEO improvements - [SvelteKit docs](https://kit.svelte.dev/docs/seo)

## Packages added
* npm i @leveluptuts/svelte-fit
* npm i svelte-body -D
* ress i ress
* npm i sass -D

## Questions
* What's the best way to set a different body color for different routes? svelte-body works, but renders with a flash; this is currently obscured by a full-height div wrapper of the same color. I'm not sure if this works as expected with both CSR & SSR.
* Does specifying page content via component props (i.e. JS) interfere with the benefits of SSR, e.g. SEO?