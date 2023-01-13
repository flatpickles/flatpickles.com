<script lang="ts">
    import HomeLinkOverlay from '$lib/components/HomeLinkOverlay.svelte';
    import type { ProjectData } from '$lib/types';
    import WritingDisplay from '$lib/components/WritingDisplay.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
    export let project: ProjectData = data.project;
</script>

<svelte:head>
    <title>{project.title}</title> 
</svelte:head>

<HomeLinkOverlay />

<WritingDisplay project={project} />