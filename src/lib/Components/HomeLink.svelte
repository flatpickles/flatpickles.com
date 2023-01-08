<script lang="ts">
    export let opacity: string = "0.5";
</script>

<a href="/" style="--base-opacity: {opacity}">Flat Pickles</a>

<style>
    a {
        color: inherit;
        text-decoration: none;
        opacity: var(--base-opacity);
        transition: opacity 0.3s ease-out;
        font-size: 1.25em;
        pointer-events: all;
    }

    a:hover {
        opacity: 1;
    }
</style>