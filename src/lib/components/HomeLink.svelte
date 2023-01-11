<script lang="ts">
    export let opacity: string = "0.5";

    import fpIcon from '$lib/assets/fp-icon.svg';
</script>

<a href="/" style="--base-opacity: {opacity}">
    <img src={fpIcon} alt="Flat Pickles" />
</a>

<style>
    img {
        display: block;
        width: 1.5em;
        height: 1.5em;
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