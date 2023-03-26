<script lang="ts">
    import HomeLinkOverlay from '$lib/components/HomeLinkOverlay.svelte';
    import type { PageData } from './$types';
    import type { ProjectData } from '$lib/types';
    import WritingDisplay from '$lib/components/WritingDisplay.svelte';

    export let data: PageData;
    $: project = data.project;
</script>

<svelte:head>
    <title>{project.title}</title> 
    <meta name="description" content='A writing project by Matt Nichols, entitled "{project.title}".' />
</svelte:head>

<HomeLinkOverlay />

<WritingDisplay project={project} />