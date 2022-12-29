# flatpickles.com

## Known Issues
* Flash of unstyled content even when loading on Vercel?
* Double render (SSR + CSR) locally (seems expected - but why?)

## List
* Main:
    * Highlight cards
    * Content list
    * Spacing
* API:
    * Content list w/ metadata (by type)
    * Asset retrieval
* Media page
* Writing page (w/ Markdown)

* Smooth transitions between pages
* Figure out implications of SSR vs CSR in SvelteKit
* Figure out data schema (file system) for content
* Work on slug-based pages for each piece of data

# To consider
* Improvements for title sizing: remove flash at small size
* Typography alignment for title text

## Log
* Responsive main page title w/ svelte-fit
* Switch fonts to WOFF (faster loading?)
* Add svelte-body to change background colors in each sector
* Figure out basic routing

## Packages added
* npm i @leveluptuts/svelte-fit
* npm i svelte-body -D
* ress i ress
* npm i sass -D

## Questions
* What's the best way to set a different body color for different routes? svelte-body works, but renders with a flash; this is currently obscured by a full-height div wrapper of the same color. I'm not sure if this works as expected with both CSR & SSR.