<script lang="ts">
    import type { NoteData } from '$lib/types';

    export let note: NoteData;
</script>

<div class="note">
    <div class="note-header">
        <div class="note-title">
            {note.title}
        </div>

        <div class="note-date">
            {note.date.toLocaleDateString('en-us', {
                day: 'numeric',
                year: 'numeric',
                month: 'long'
            })}
        </div>
    </div>

    <div class="note-body">
        <svelte:component this={note.component} />
    </div>
</div>

<style>
    .note {
        padding-bottom: 1em;
    }

    .note-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: baseline;
    }

    .note-title {
        font-size: 2em;
        font-family: 'Hobeaux';
    }

    .note-date {
        opacity: 0.5;
        font-size: 1.1em;
    }

    .note-body {
        font-size: 1.1em;
        text-align: justify;
    }
</style>