<script>
  import PageBody from "../PageBody.svelte";
  import PagesDisplay from "./PagesDisplay.svelte";
  import Note from "./Note.svelte";
</script>

<h1>Notes and Such</h1> <!-- BigHeader -->

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
    h1 {
        font-size: 6em; /* Todo: svg */
        font-family: 'Hobeaux';
    }

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
        border-radius: calc(var(--padding) / 2);
        background-color: rgba(0, 0, 0, 7%);
    }
</style>