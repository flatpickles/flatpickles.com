<script lang="ts">
    import HighlightCard from './HighlightCard.svelte';
</script>

<div class="highlights">
    <HighlightCard title="Sketchbook" link="https://longitude.studio" image="/img/floppy.png" />
    <HighlightCard title="Good Wording" link="https://goodword.ing" image="/img/essentia.png" />
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
