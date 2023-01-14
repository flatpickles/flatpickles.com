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

<NoteDisplay
    note = {note}
    exclusive = {true}
/>

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
        text-align: center;
        font-size: 1.1em;
    }
</style>
