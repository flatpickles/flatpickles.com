<script lang="ts">
    import BigHeader from '$lib/components/BigHeader.svelte';
    import LinkBar from '$lib/components/LinkBar.svelte';
    import AboutContent from '$lib/content/about.md';
</script>

<svelte:head>
    <title>About Matt</title>
    <meta name="description" content="A few paragraphs about Matt Nichols and his website. Thanks for visiting!" />
</svelte:head>

<BigHeader linkHome={true} />

<LinkBar />

<div class="about-wrapper">
    <AboutContent />
</div>

<style>
    .about-wrapper {
        font-size: 1.1em;
        /* text-align: justify; */
    }

    @media ( max-width: 500px) {
        .about-wrapper {
            hyphens: auto;
        }
    }
</style>