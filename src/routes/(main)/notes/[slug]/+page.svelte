<script lang="ts">
    import BigHeader from '$lib/components/BigHeader.svelte';
    import Note from '$lib/components/NoteDisplay.svelte';
    import NotesLede from '$lib/components/NotesLede.svelte';
    import type { PageData } from './$types';
    import PaginationDisplay from '$lib/components/PaginationDisplay.svelte';
    import HomeLinkOverlay from '$lib/components/HomeLinkOverlay.svelte';

    export let data: PageData;
    $: page = data.page;
</script>

<svelte:head>
    <title>Notes</title>
    <meta name="description" content="Notes from Matt Nichols, page {page.currentPage}." />
</svelte:head>

<HomeLinkOverlay />

<BigHeader linkHome={true} />

<NotesLede />

<div class="notes-wrapper">
    {#each page.notes as note (note.title)}
        <Note {note} />
    {/each}

    {#if page.pageCount > 1}
        <PaginationDisplay currentPage={page.currentPage} pageCount={page.pageCount} />
    {/if}
</div>
