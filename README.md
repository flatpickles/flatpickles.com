# flatpickles.com

## To do
* Publishing
    * Polish README
    * Move flatpickles.com DNS to vercel
    * Close out GitHub pages
    * Publish new repository as public (why not)
    * Update NPM version (and set up further auto-updating)
    * Update direct link from Sketchbook (Ethereal Goop)
* Polish
    * Card title text wrapping
    * Padding between title & date on writing & notes
    * Em padding when font-size is set (e.g. footer size)
    * Adjust pixel-sized page width calculations to em values
    * Semantic markup!
    * Remove/address todos & questions
    * Sort imports
    * Check for quote style, indentation, etc (maybe use a linter?)
    * Adjust body class approach [this way](https://github.com/sveltejs/svelte/issues/3105#issuecomment-1373889014)
* Slug page for text & notes
    * Hide header when scrolling down (maybe within HomeLinkOverlay)
* Slug page for media
    * Hide header & footer between taps & mouse movement
    * Content loading indicator
* SEO improvements & link previews
    * [Create](https://dev.to/domagojvidovic/how-to-create-beautiful-link-previews-for-every-platform-1nka) and [test](https://socialsharepreview.com/) link previews
    * [Structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data#structured-data)
    * [SvelteKit docs](https://kit.svelte.dev/docs/seo)
* Tests - [helpful resource](https://el3um4s.medium.com/how-to-test-sveltekit-app-with-jest-848afa8edbc7)

## Known problems
* Header image loads after page on mobile
* Header image presented small first, then sized up (one frame)
* Flash of unstyled content even when loading on Vercel?
* Occasional "Not found: /favicon.ico" errors
* Generating full index requires loading all writing .md files (+100ms)
* ProjectList responsive design could be improved: CSS grid maybe, for fewer magic numbers.
* Double render (SSR + CSR) locally (seems expected - but why?)

## Ideas / considerations
* Smooth transitions between pages
* Update Spark effects and add links to archive
* Maybe use Vite imports for media assets
* Anchor page for media
* Anchor page for text
* Convert straight to curly quotes throughout (pre-process?)
* Notes design
    * Better code & code block formatting
    * Justify alignment only on larger screens? Looks goofy on iPhone. Maybe smaller text would help as well.
* Loop some videos, but not all?
* WritingDisplay & NoteDisplay are similar but intentionally different. Maybe these should be consolidated, as a component and/or into the same design.
* Better original date display within NoteDisplay
* Display only the first part of especially long notes on the main notes page
* Return to whichever notes page we came from on [Back to Notes and Such] (re: pagination)

## Packages added
* npm i @js-joda/locale_en-us
* npm i @js-joda/core
* npx ts-jest config:init (then rename to jest.config.cjs)
* npm install -D jest typescript ts-jest @types/jest
* npm i postcss-easing-gradients
* npx svelte-add@latest postcss
* npm i -D @sveltejs/adapter-vercel
* npm i -D mdsvex
* npm i -D svelte-body 
* ress i ress

## Questions
* Comparison with TypeScript enum - triple equals? // ??
* TypeScript warning in media page.svelte
* Implications of SSR vs CSR in SvelteKit?
* What's the best way to set a different body color for different routes? svelte-body works, but renders with a flash; this is currently obscured by a full-height div wrapper of the same color. I'm not sure if this works as expected with both CSR & SSR.
* Does specifying page content via component props (i.e. JS) interfere with the benefits of SSR, e.g. SEO?
* What's the best way to check if an enum type is one of several different options?
* Why doesn't import.meta.glob return a promise, while import does?
* `const { metadata, default: component} = module as any;` -- why type only for second?
* Type 'never' error workaround in notes/.../+page.svelte
* redirect usage in +page.ts vs +page.server.ts – should I worry about CSR vs SSR?
* number | null vs. number | undefined (in TypeScript)