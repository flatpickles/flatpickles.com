<script lang='ts'>
    import PagesDisplay from '../PagesDisplay.svelte';
    import Note from '../NoteDisplay.svelte';
    import BigHeader from '../../BigHeader.svelte';
    import { HeaderType, type NoteData, type NotesPage } from '$lib/types';
    import type { PageData } from '../$types';
    import NotesLede from '../NotesLede.svelte';

    export let data: PageData;
    const page: NotesPage = data['page'];
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