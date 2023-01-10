<script lang="ts">
    import HomeLinkOverlay from '$lib/components/HomeLinkOverlay.svelte';
    import type { ProjectData } from "$lib/types";
    import WritingDisplay from '../WritingDisplay.svelte';
    import type { PageLoad } from "./$types";

    export let data: PageLoad | any; // suppress warnings
    export let project: ProjectData = data.project;
</script>

<svelte:head>
    <title>{project.title}</title> 
</svelte:head>

<HomeLinkOverlay />

<WritingDisplay project={project} />