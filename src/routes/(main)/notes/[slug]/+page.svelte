<script lang='ts'>
    import Note from '$lib/components/NoteDisplay.svelte';
    import BigHeader from '$lib/components/BigHeader.svelte';
    import { HeaderType, type NoteData, type NotesPage } from '$lib/types';
    import type { PageData } from './$types';
    import NotesLede from '$lib/components/NotesLede.svelte';
    import PaginationDisplay from '$lib/components/PaginationDisplay.svelte';

    export let data: PageData;
    $: page = data.page;
</script>

<svelte:head>
    <title>Notes and Such</title>
    <meta name="description" content="Notes and Such from Matt Nichols, page {page.currentPage}."/>
</svelte:head>

<BigHeader type={HeaderType.NotesAndSuch} />

<NotesLede />

<div class="notes-wrapper">
    {#each page.notes as note }   
        <Note {note} />
    {/each}

    {#if page.pageCount > 1}
        <PaginationDisplay 
            currentPage={page.currentPage}
            pageCount={page.pageCount}
        />
    {/if}
</div>