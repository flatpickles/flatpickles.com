<script lang="ts">
    import type { NoteData } from '$lib/types';

    export let note: NoteData;
    export let exclusive = false;
</script>

<article class="note">
    <header class="note-header">
        <h1 class="note-title">
            {#if !exclusive}
                <a href={note.url}>
                    {note.title}
                </a>
            {:else}
                {note.title}
            {/if}
        </h1>

        <time class="note-date" datetime={note.date.toISOString()}>
            {note.date.toLocaleDateString('en-us', {
                day: 'numeric',
                year: 'numeric',
                month: 'long'
            })}
        </time>
    </header>

    <section class="note-body">
        <svelte:component this={note.component} />
    </section>
</article>

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
        font-weight: normal;
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