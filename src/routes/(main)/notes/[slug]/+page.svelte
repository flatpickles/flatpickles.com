<script lang='ts'>
    import PagesDisplay from '../PagesDisplay.svelte';
    import Note from '../NoteDisplay.svelte';
    import BigHeader from '../../BigHeader.svelte';
    import { HeaderType, type NoteData, type NotesPage } from '$lib/types';
    import type { PageData } from '../$types';
    import NotesLede from '../NotesLede.svelte';

    export let data: PageData;
    $: page = data['page'] as NotesPage; // ?? - using data.page results in type 'never' error
</script>

<svelte:head>
    <title>Notes and Such</title>
</svelte:head>

<BigHeader type={HeaderType.NotesAndSuch} />

<NotesLede />

<div class="notes-wrapper">
    {#each page.notes as note }   
        <Note {note} />
    {/each}

    <PagesDisplay 
        currentPage={page.currentPage}
        pageCount={page.pageCount}
    />
</div>