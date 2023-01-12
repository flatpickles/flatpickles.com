<script lang="ts">
    import type { NoteData } from '$lib/types';

    export let note: NoteData;
    export let exclusive = false;
</script>

<div class="note">
    <div class="note-header">
        <div class="note-title">
            {#if !exclusive}
                <a href={note.url}>
                    {note.title}
                </a>
            {:else}
                {note.title}
            {/if}
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
    a {
        color: inherit;
    }

    a:hover {
        color: var(--link-color);
    }

    .note {
        padding-bottom: 1em;
    }

    .note-header {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 1em;
        justify-content: space-between;
        align-items: baseline;
    }

    .note-title {
        font-size: 2em;
        font-family: 'Hobeaux';
    }

    .note-date {
        color: var(--transparent-dark-text);
        font-size: 1.1em;
    }

    .note-body {
        padding-top: 0.5em;
        font-size: 1.1em;
        text-align: justify;
    }
</style>