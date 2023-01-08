<script>
    import HomeLink from "$lib/Components/HomeLink.svelte";
</script>

<div class="overlay">
    <HomeLink opacity=0.5/>
</div>

<style>
    .overlay {
        position: fixed;
        z-index: 1;
        width: 100%;
        pointer-events: none;

        padding: var(--padding);
        min-height: calc(var(--padding) * 4);
        
        background-image: linear-gradient(
            rgba(255, 255, 255, 1.0), 
            rgba(255, 255, 255, 0.8), 
            rgba(255, 255, 255, 0.7), 
            rgba(255, 255, 255, 0)
        );
        font-family: 'Hobeaux';
    }
</style>