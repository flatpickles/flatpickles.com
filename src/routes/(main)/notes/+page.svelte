<script lang="ts">
    import PageBody from "../PageBody.svelte";
    import PagesDisplay from "./PagesDisplay.svelte";
    import Note from "./Note.svelte";
    import BigHeader from "../BigHeader.svelte";
    import { HeaderType } from "$lib/types";
</script>

<svelte:head>
    <title>Notes and Such</title>
</svelte:head>

<BigHeader type={HeaderType.NotesAndSuch} />

<div class="notes-lede">
    <p>
        This is a space for bits, pieces, odds, and ends. If you're looking for completed projects, check out my <a href="/">homepage!</a>
    </p>
</div>

<PageBody>
    <Note />
    <Note />
    <Note />
    <Note />

    <PagesDisplay />
</PageBody>

<style>
    a {
        color: rgb(0, 0, 134);
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    .notes-lede {
        font-size: 1.25em;
        text-align: justify;
        padding: calc(var(--padding) / 2);
        margin-top: var(--padding);
        border-radius: calc(var(--padding) / 2);
        background-color: rgba(0, 0, 0, 7%);
    }
</style>