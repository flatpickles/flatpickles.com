<script>
    import HomeLink from "./HomeLink.svelte";
</script>

<div class="home-wrapper">
    <HomeLink opacity=0.7 />
</div>

<style>
    .home-wrapper {
        position: fixed;
        background-color: inherit;
        top: var(--padding);
        right: var(--padding);
        border-radius: 50%;
    }
</style>