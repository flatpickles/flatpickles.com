# flatpickles.com

## List
* Flash of unstyled content even when loading on Vercel
* Work on basic layout and styling for each sector
* Figure out implications of SSR vs CSR in SvelteKit
* Figure out data schema (file system) for content
* Work on slug-based pages for each piece of data

## Log
* Add svelte-body to change background colors in each sector
* Figure out basic routing

## Packages added
* npm i svelte-body -D
* ress i ress
* npm i sass -D

## Questions
* What's the best way to set a different body color for different routes? svelte-body works, but renders with a flash; this is currently obscured by a full-height div wrapper of the same color. I'm not sure if this works as expected with both CSR & SSR.