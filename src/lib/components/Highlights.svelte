<script lang="ts">
    import HighlightCard from './HighlightCard.svelte';
</script>

<div class="highlights">
    <HighlightCard title="Creative Coding" link="https://longitude.studio" image="/img/floppy.png" />
    <HighlightCard title="Sketchbook" link="https://skbk.cc" image="/img/essentia.png" />
    <HighlightCard title="About Me" link="/about" image="/img/rect.png" />
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
