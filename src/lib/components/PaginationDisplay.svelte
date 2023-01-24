<script lang="ts">
    export let currentPage: number;
    export let pageCount: number;
</script>

<nav class="pages">
    {#each [...(Array(pageCount).keys())] as pageNumber}
        {#if pageNumber + 1 == currentPage}
            [{pageNumber + 1}]
        {:else}
            <a href={`/notes/${pageNumber + 1}`} class:current={pageNumber + 1 == currentPage}>
                [{pageNumber + 1}]
            </a>
        {/if}
    {/each}
</nav>

<style>
    nav {
        display: flex;
        flex-direction: row;
        justify-content: center;
        column-gap: 0.5em;
        margin-top: 1em;

        font-size: 1.1em;
    }

    a:not(.current) {
        color: var(--transparent-dark-text);
    }

    a:hover {
        color: var(--link-color);
    }

    .pages {
        width: 100%;
        text-align: center;
    }

    .current {
        font-weight: bold;
    }

</style>