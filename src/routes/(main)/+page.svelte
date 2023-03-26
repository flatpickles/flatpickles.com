<script lang='ts'>
    import type { PageData } from './$types';
    import type { ProjectData } from '$lib/types';

    import BigHeader from '$lib/components/BigHeader.svelte';
    import Copyright from '$lib/components/Copyright.svelte';
    import Highlights from '$lib/components/Highlights.svelte';
    import ProjectList from '$lib/components/ProjectList.svelte';

    export let data: PageData;
    $: projects = data.projects;
</script>

<svelte:head>
    <title>Matt Nichols</title>
    <meta name="description" content="Matt Nichols is a software engineer and creative human. This is where he publishes side projects, and notes on whatever he's creating and learning." />
</svelte:head>

<BigHeader />

<Highlights />

<ProjectList {projects} />

<Copyright />

