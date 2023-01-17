<script lang="ts">
    import HighlightCard from './HighlightCard.svelte';

    import floppyImg from '$lib/assets/floppy.png';
    import goopImg from '$lib/assets/goop.png';
    import rectImg from '$lib/assets/rect.png';
</script>

<div class="highlights">
    <HighlightCard 
        title="Sketchbook"
        link="https://sketchbook.flatpickles.com"
        image={floppyImg}
    />
    <HighlightCard 
        title="Notes and Such"
        link="/notes"
        image={goopImg}
    />
    <HighlightCard 
        title="About Me"
        link="/about"
        image={rectImg}
    />
</div>

<style>
    .highlights {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5em;
        margin-top: 1.5em;
        margin-bottom: 2em;
    }
</style>