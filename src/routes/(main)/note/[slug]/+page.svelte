<script lang="ts">
    import HomeLinkOverlay from '$lib/components/HomeLinkOverlay.svelte';
    import type { NoteData } from '$lib/types';
    import NoteDisplay from '$lib/components/NoteDisplay.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
    $: note = data.note;
</script>

<svelte:head>
    <title>{note.title}</title>
    <meta name="description" content={`A note by Matt Nichols, entitled "${note.title}".`} />
</svelte:head>

<HomeLinkOverlay />

<div class="note-wrapper">
    <NoteDisplay {note} exclusive={true} />

    <nav class="back">
        <a href="/notes">[See all Notes]</a>
    </nav>
</div>

<style>
    a {
        color: var(--transparent-dark-text);
    }

    a:hover {
        color: var(--link-color);
    }

    .back {
        margin-top: 0.5em;
        text-align: center;
        font-size: 1.1em;
    }
</style>
