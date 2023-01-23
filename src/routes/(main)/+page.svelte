<script lang='ts'>
    import { HeaderType, type ProjectData } from '$lib/types';
    import type { PageData } from './$types';

    import BigHeader from '$lib/components/BigHeader.svelte';
    import Highlights from '$lib/components/Highlights.svelte';
    import ProjectList from '$lib/components/ProjectList.svelte';

    export let data: PageData;
    const projects: ProjectData[] = data.projects;
</script>

<svelte:head>
    <title>Flat Pickles</title>
    <meta name="description" content="Matt Nichols is a software engineer and creative human. This is where he publishes side projects, and notes on whatever he's creating and learning." />
</svelte:head>

<BigHeader type={HeaderType.MattNichols} />

<Highlights />

<ProjectList {projects} />

<footer class="copyright">
    Copyright &copy 2023 Matt Nichols
</footer>

<style>
    .copyright {
        text-align: center;
        margin-top: 2em;

        font-family: 'Vulf Mono';
        font-size: 0.9em;
        color: rgba(0, 0, 0, 30%);
    }
</style>
