# [flatpickles.com](https://flatpickles.com)

Ahoy there! You've found the source code for my personal website. If you want to know more about how I built the site, you've come to the right place!

The site is built with [SvelteKit](https://kit.svelte.dev/). This marvelous framework makes lots of things easy: routing, server-side rendering, bundling, TypeScript compilation, and more. [Svelte](https://svelte.dev/) is also a beautiful tool for front-end development, putting scripting and styling in the same files as component markdown, and generally streamlining things in an intuitive way. I'm currently deploying the site to [Vercel](https://vercel.com/), which is extremely easy to use – each time I push to main, Vercel automatically picks up my changes and deploys them moments later.

All projects published on the site are either media files (photos & videos), markdown text, or external links. The media files are displayed directly with no compression or special treatment for now, and I'm using [MDsveX](https://mdsvex.com/) for markdown rendering throughout the site (writing projects, notes, about page, etc). All content is bundled into the site; I don't have a database or proper API of any sort, though it should be easy to swap in a more heavy duty solution if/when that becomes relevant.

I'm using [ts-jest](https://huafu.github.io/ts-jest/) for some lightweight testing – currently limited to tests for datetime parsing and rendering (via [js-joda](https://js-joda.github.io/js-joda/)). I'll get around to writing more tests eventually, but this will do for now.

The design of the site is quite typography focused. I've licensed the Vulf and Hobeaux families from [OH no Type Co.](https://ohnotype.co/), and I'm glad to let these magnificent typefaces anchor my visual aesthetic. I've also kept responsiveness in mind while designing and building, and my hope is that flatpickles.com is equally appealing for both desktop and mobile users.

Lately I've been doing project planning via the readme files in my project repos, so expect only rough notes beyond this point, mostly for my future reference!

---

## To do

-   Ongoing updates
    -   Consider tumblr instead of notes? Or reformat notes to make them less formal.
-   Polish
    -   Em padding when font-size is set (e.g. unequal bottom padding for block in Notes) (use rem!)
    -   Add back descenders for Hobeaux fonts (Font Squirrel - adjust alt in CSS)
    -   Adjust pixel-sized page width calculations to rem values (?)
    -   Semantic markup!
    -   Remove/address todos & questions
    -   Check for quote style, indentation, etc (maybe use a linter?)
    -   Adjust body class approach [this way](https://github.com/sveltejs/svelte/issues/3105#issuecomment-1373889014)
-   Image project (sub)types: Photography, Design, Render
-   Tags/categories for notes
-   Note embed for project status (project idea posts)
-   RSS feed for notes!
-   Backdrop visualizer: REGL -> 2D shader, or some such
-   Slug page for media
    -   Hide header & footer between taps & mouse movement
-   Slug page for text/notes
    -   Seems like mobile scroll height is too tall (on short pieces)
    -   HomeLinkOverlay fades back in when hitting bottom scroll on mobile Safari
-   SEO improvements & link previews
    -   [Create](https://dev.to/domagojvidovic/how-to-create-beautiful-link-previews-for-every-platform-1nka) and [test](https://socialsharepreview.com/) link previews
    -   [Structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data#structured-data)
    -   [SvelteKit SEO docs](https://kit.svelte.dev/docs/seo)
-   Tests - [helpful resource](https://el3um4s.medium.com/how-to-test-sveltekit-app-with-jest-848afa8edbc7)

## Known problems

-   Header image loads after page on mobile
-   Header image presented small first, then sized up (one frame)
-   Flash of unstyled content even when loading on Vercel?
-   Occasional "Not found" errors
-   Generating full index requires loading all writing .md files (+100ms)
-   ProjectList responsive design could be improved: CSS grid maybe, for fewer magic numbers.
-   Double render (SSR + CSR) locally (seems expected - but why?)

## Ideas / considerations

-   Smooth transitions between pages
-   Update Spark effects and add links to archive
-   Maybe use Vite imports for media assets
-   Anchor page for media
-   Anchor page for text
-   Convert straight to curly quotes throughout (pre-process?)
-   Notes design
    -   Better code & code block formatting
-   Loop some videos, but not all?
-   WritingDisplay & NoteDisplay are similar but intentionally different. Maybe these should be consolidated, as a component and/or into the same design.
-   Better original date display within NoteDisplay
-   Display only the first part of especially long notes on the main notes page
-   Return to whichever notes page we came from on [Back to Notes] (re: pagination)

## Packages added

-   npm i @js-joda/locale_en-us
-   npm i @js-joda/core
-   npx ts-jest config:init (then rename to jest.config.cjs)
-   npm install -D jest typescript ts-jest @types/jest
-   npm i postcss-easing-gradients
-   npx svelte-add@latest postcss
-   npm i -D @sveltejs/adapter-vercel
-   npm i -D mdsvex
-   npm i -D svelte-body
-   ress i ress

## Questions

-   Comparison with TypeScript enum - triple equals? // ??
-   TypeScript warning in media page.svelte
-   Implications of SSR vs CSR in SvelteKit?
-   What's the best way to set a different body color for different routes? svelte-body works, but renders with a flash; this is currently obscured by a full-height div wrapper of the same color. I'm not sure if this works as expected with both CSR & SSR.
-   Does specifying page content via component props (i.e. JS) interfere with the benefits of SSR, e.g. SEO?
-   What's the best way to check if an enum type is one of several different options?
-   Why doesn't import.meta.glob return a promise, while import does?
-   `const { metadata, default: component} = module as any;` -- why type only for second?
-   Type 'never' error workaround in notes/.../+page.svelte
-   redirect usage in +page.ts vs +page.server.ts – should I worry about CSR vs SSR?
-   number | null vs. number | undefined (in TypeScript)
