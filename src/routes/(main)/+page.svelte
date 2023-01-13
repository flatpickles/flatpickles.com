<script lang='ts'>
    import { HeaderType, type ProjectData } from '$lib/types';
    import type { PageData } from './$types';

    import BigHeader from '$lib/components/BigHeader.svelte';
    import Highlights from './Highlights.svelte';
    import ProjectList from './ProjectList.svelte';

    export let data: PageData;
    const projects: ProjectData[] = data.projects;
</script>

<svelte:head>
    <title>Flat Pickles</title>
</svelte:head>

<BigHeader type={HeaderType.FlatPickles} />

<Highlights />

<ProjectList {projects} />

<footer class="copyright">
    Copyright &copy 2023 Matt Nichols
</footer>

<style>
    .copyright {
        text-align: center;
        margin-top: 2em;
        font-size: 1.1em;
        color: var(--transparent-dark-text);
    }
</style>
