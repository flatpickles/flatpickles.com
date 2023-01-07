<script lang="ts">
    import type { ProjectData } from "$lib/types";
    import MediaDisplay from '../MediaDisplay.svelte';
    import MediaOverlay from '../MediaOverlay.svelte';
    import type { PageLoad } from "./$types";

    export let data: PageLoad | any; // suppress warnings
    const project: ProjectData = data.project;
</script>

<svelte:head>
    <title>{project.title}</title> 
</svelte:head>

<MediaDisplay
    project={project}
/>

<MediaOverlay
    title={project.title}
    date={project.date}
/>
