<script lang="ts">
    import About from '$lib/content/about.md';
    import { HeaderType } from '$lib/types';
    import BigHeader from '$lib/components/BigHeader.svelte';
    import LinkBar from '$lib/components/LinkBar.svelte';
</script>

<svelte:head>
    <title>Matt Nichols</title>
</svelte:head>

<BigHeader type={HeaderType.MattNichols} />

<LinkBar />

<div class="about-wrapper">
    <About />
</div>

<style>
    .about-wrapper {
        text-align: justify;
        font-size: 1.2em;
    }
</style>