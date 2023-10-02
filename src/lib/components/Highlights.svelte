<script lang="ts">
    import HighlightCard from './HighlightCard.svelte';

    import floppyImg from '$lib/assets/floppy.png';
    import lsImg from '$lib/assets/ls-header.png';
    import rectImg from '$lib/assets/rect.png';
</script>

<div class="highlights">
    <HighlightCard 
        title="Generative Art"
        link="https://sketchbook.flatpickles.com"
        image={floppyImg}
    />
    <HighlightCard 
        title="Longitude Studio"
        link="https://instagram.com/longitude.studio"
        image={lsImg}
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
        margin-bottom: 1.5em;
    }
</style>