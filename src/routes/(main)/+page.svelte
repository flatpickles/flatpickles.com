<script lang='ts'>
    import { HeaderType } from '$lib/types';
    import type { PageData } from './$types';

    import BigHeader from './BigHeader.svelte';
    import Highlights from './Highlights.svelte';
    import ProjectList from './ProjectList.svelte';

    export let data: PageData;
</script>

<svelte:head>
    <title>Flat Pickles</title>
</svelte:head>

<BigHeader type={HeaderType.FlatPickles} />

<Highlights />

<ProjectList projects={data.projects} />

<div class="copyright">
    Copyright &copy 2023 Matt Nichols
</div>

<style>
    .copyright {
        text-align: center;
        margin-top: 2em;
        font-size: 1.1em;
        color: var(--transparent-dark-text);
    }
</style>
