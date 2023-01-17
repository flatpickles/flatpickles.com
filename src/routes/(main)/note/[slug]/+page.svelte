<script lang="ts">
    import HomeLinkOverlay from '$lib/components/HomeLinkOverlay.svelte';
    import type { NoteData } from '$lib/types';
    import NoteDisplay from '$lib/components/NoteDisplay.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
    export let note: NoteData = data.note;
</script>

<svelte:head>
    <title>{note.title}</title> 
</svelte:head>

<HomeLinkOverlay />

<div class="note-wrapper">
    <NoteDisplay
        note = {note}
        exclusive = {true}
    />
</div>

<nav class="back">
    <a href="/notes">[Back to Notes and Such]</a>
</nav>

<style>
    a {
        color: var(--transparent-dark-text);
    }

    a:hover {
        color: var(--link-color);
    }

    .back {
        padding-top: 1em;
        text-align: center;
        font-size: 1.1em;
    }
</style>
