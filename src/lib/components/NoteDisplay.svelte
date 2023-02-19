<script lang="ts">
    import { DateUtils } from '$lib/Utils';
    import type { NoteData } from '$lib/types';
    import type { ZonedDateTime } from '@js-joda/core';

    export let note: NoteData;
    export let exclusive = false;

    const updated: boolean = (note.updated != undefined);
    const displayedDate: ZonedDateTime = note.updated ?? note.date;
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

        <time class="note-date" datetime={displayedDate.toString()} title={`Published: ${DateUtils.renderLong(note.date)}`}>
            {#if updated}Updated:{/if}
            {DateUtils.renderLong(displayedDate)}
            {#if note.draft}• Draft{/if}
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

    .note:not(:last-child) {
        padding-bottom: 1.5em;
    }

    .note-header {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        column-gap: 1em;
        justify-content: space-between;
        align-items: baseline;
    }

    .note-title {
        font-family: 'Hobeaux';
        font-feature-settings: 'salt';
        font-weight: bold;
        font-size: 2em;
    }

    .note-date {
        color: var(--transparent-dark-text);
        font-size: 1em;
    }

    .note-body {
        padding-top: 0.5em;
        padding-bottom: 0.5em;
        font-size: 1.1em;
        text-align: justify;
    }

    @media ( max-width: 500px) {
        .note-body {
            hyphens: auto;
        }
    }

    :global(blockquote) {
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        margin-left: 0.5em;
        padding-left: 1em;
        padding-right: 1.5em;

        border-left: 2px dotted rgba(0, 0, 0, 75%);

        color: rgba(0, 0, 0, 75%);
        font-size: 0.909090em;
    }

    /* todo: better code formatting, probably in a dedicated file */
    
    :global(code) {
        padding-left: 0.2em;
        padding-right: 0.2em;
        vertical-align: baseline;

        background-color: var(--transparent-background);
        border-radius: 0.2em;

        font-family: 'Vulf Mono';
        font-size: 0.77em;
        hyphens: none;
    }

    :global(code.language-undefined) {
        display: block;
        max-width: fit-content;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        padding-bottom: 0.2em;
        overflow: scroll;

        /* Hide scrollbar in Firefox */
        overflow: -moz-scrollbars-none;
        scrollbar-width: none;

        /* Hide scrollbar in IE */
        -ms-overflow-style: none;
    }

    /* Hide scrollbar in Webkit */
    :global(code.language-undefined::-webkit-scrollbar) { 
        width: 0 !important;
        display: none; 
    }
</style>