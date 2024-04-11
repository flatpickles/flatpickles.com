<script lang="ts">
    import HomeLinkOverlay from '$lib/components/HomeLinkOverlay.svelte';
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
</div>
