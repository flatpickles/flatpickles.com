<script lang="ts">
    import MediaDisplay from '$lib/components/MediaDisplay.svelte';
    import MediaOverlay from '$lib/components/MediaOverlay.svelte';
    import type { PageData } from './$types';
    import type { ProjectData } from '$lib/types';

    export let data: PageData;
    $: project = data.project;
</script>

<svelte:head>
    <title>{project.title}</title> 
    <meta name="description" content='{project.type} by Matt Nichols, entitled "{project.title}".' />
</svelte:head>

<MediaDisplay
    project={project}
/>

<MediaOverlay
    title={project.title}
    date={project.date}
/>
