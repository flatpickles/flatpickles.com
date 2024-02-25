<script lang="ts">
    import HighlightCard from './HighlightCard.svelte';

    import floppyImg from '$lib/assets/floppy.png';
    import swirlImg from '$lib/assets/essentia.png';
    import rectImg from '$lib/assets/rect.png';
</script>

<div class="highlights">
    <HighlightCard title="Sketchbook" link="https://longitude.studio" image={floppyImg} />
    <HighlightCard title="Good Wording" link="https://goodword.ing" image={swirlImg} />
    <HighlightCard title="About Me" link="/about" image={rectImg} />
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
