<script lang="ts">
    import HighlightCard from './HighlightCard.svelte';
</script>

<div class="highlights">
    <div class="system-message-row">
        <div>
            Thanks for visiting flatpickles.com! This is an archival collection of projects. For
            more recent material, check out <a href="https://diachrony.net">diachrony.net</a>.
        </div>
    </div>
    <HighlightCard
        title="Creative Coding"
        link="https://longitude.studio"
        image="/img/floppy.png"
    />
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

    .system-message-row {
        width: 100%;
        padding: 0.7em;
        border-radius: 0.5em;
        margin-bottom: 1em;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5em 1em;
        align-items: baseline;
        background-color: var(--transparent-background);
    }
</style>
