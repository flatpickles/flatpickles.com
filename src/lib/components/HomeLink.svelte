<script lang="ts">
    import fpIcon from '$lib/assets/fp-icon.svg';
</script>

<a href="/">
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
        opacity: 0.7;
        transition: opacity 0.3s ease-out;
        pointer-events: all;
    }

    a:hover {
        opacity: 1;
    }
</style>