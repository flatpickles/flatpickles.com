// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

// Markdown importing should "just work" with SvelteKet & MDsveX,
// but seems like I need this to resolve VSCocde import errors.
// https://stackoverflow.com/questions/44678315/how-to-import-markdown-md-file-in-typescript/
declare module "*.md";
