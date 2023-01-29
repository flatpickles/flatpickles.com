<script lang='ts'>
    import type { ProjectData } from '$lib/types';
    import type { PageData } from './$types';

    import BigHeader from '$lib/components/BigHeader.svelte';
    import Highlights from '$lib/components/Highlights.svelte';
    import ProjectList from '$lib/components/ProjectList.svelte';
    import Copyright from '$lib/components/Copyright.svelte';

    export let data: PageData;
    const projects: ProjectData[] = data.projects;
</script>

<svelte:head>
    <title>Matt Nichols</title>
    <meta name="description" content="Matt Nichols is a software engineer and creative human. This is where he publishes side projects, and notes on whatever he's creating and learning." />
</svelte:head>

<BigHeader />

<Highlights />

<ProjectList {projects} />

<Copyright />

