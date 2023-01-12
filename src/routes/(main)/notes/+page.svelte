<script lang='ts'>
    import PagesDisplay from './PagesDisplay.svelte';
    import Note from './Note.svelte';
    import BigHeader from '../BigHeader.svelte';
    import { HeaderType, type NoteData } from '$lib/types';
    import type { PageData } from './$types';
    import NotesLede from './NotesLede.svelte';

    export let data: PageData
    const notes: NoteData[] = data.notes;
</script>

<svelte:head>
    <title>Notes and Such</title>
</svelte:head>

<BigHeader type={HeaderType.NotesAndSuch} />

<NotesLede />

<div class="notes-wrapper">
    {#each notes as note }   
        <Note {note} />
    {/each}

    <PagesDisplay />
</div>