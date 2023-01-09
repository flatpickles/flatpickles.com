<script lang="ts">
    export let opacity: string = "0.5";
</script>

<a href="/" style="--base-opacity: {opacity}">
    <img src="/media/quick-pick.png" alt="Flat Pickles" />
</a>

<style>
    img {
        /* todo: resize asset, or use SVG */
        width: calc(var(--padding) * 1.5);
        height: calc(var(--padding) * 1.5);
    }
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