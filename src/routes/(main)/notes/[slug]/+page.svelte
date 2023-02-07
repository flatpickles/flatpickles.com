<script lang='ts'>
    import BigHeader from '$lib/components/BigHeader.svelte';
    import Note from '$lib/components/NoteDisplay.svelte';
    import NotesLede from '$lib/components/NotesLede.svelte';
    import type { PageData } from './$types';
    import PaginationDisplay from '$lib/components/PaginationDisplay.svelte';

    export let data: PageData;
    $: page = data.page;
</script>

<svelte:head>
    <title>Notes and Such</title>
    <meta name="description" content="Notes and Such from Matt Nichols, page {page.currentPage}."/>
</svelte:head>

<BigHeader linkHome={true} />

<NotesLede />

<div class="notes-wrapper">
    {#each page.notes as note (note.title)}   
        <Note {note} />
    {/each}

    {#if page.pageCount > 1}
        <PaginationDisplay 
            currentPage={page.currentPage}
            pageCount={page.pageCount}
        />
    {/if}
</div>
