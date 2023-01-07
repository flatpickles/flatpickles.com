<script>
    import HighlightCard from "./HighlightCard.svelte";
</script>

<div class="highlights">
    <HighlightCard 
        title="Sketchbook"
        link="https://sketchbook.flatpickles.com"
        image="/images/floppy.png"
    />
    <HighlightCard 
        title="Notes and Such"
        link="/notes"
        image="/images/goop.png"
    />
    <HighlightCard 
        title="About Me"
        link="/about"
        image="/images/rect.png"
    />
</div>

<style lang="scss">
    .highlights {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: calc(var(--padding) / 2);
        margin-top: calc(var(--padding) * 1.5);
    }
</style>