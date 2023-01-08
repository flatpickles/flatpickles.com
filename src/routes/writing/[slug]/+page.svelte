<script lang="ts">
    import type { ProjectData } from "$lib/types";
    import WritingDisplay from '../WritingDisplay.svelte';
    import WritingOverlay from '../WritingOverlay.svelte';
    import type { PageLoad } from "./$types";

    export let data: PageLoad | any; // suppress warnings
    export let project: ProjectData = data.project;
</script>

<svelte:head>
    <title>{project.title}</title> 
</svelte:head>

<WritingOverlay />

<WritingDisplay project={project} />