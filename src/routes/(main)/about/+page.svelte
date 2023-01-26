<script lang="ts">
    import AboutContent from '$lib/content/about.md';
    import BigHeader from '$lib/components/BigHeader.svelte';
    import LinkBar from '$lib/components/LinkBar.svelte';
</script>

<svelte:head>
    <title>About Matt</title>
    <meta name="description" content="A few paragraphs about Matt Nichols and his website. Thanks for visiting!" />
</svelte:head>

<BigHeader />

<LinkBar />

<div class="about-wrapper">
    <AboutContent />
</div>

<style>
    .about-wrapper {
        font-size: 1.1em;
        text-align: justify;
    }

    @media ( max-width: 500px) {
        .about-wrapper {
            hyphens: auto;
        }
    }
</style>