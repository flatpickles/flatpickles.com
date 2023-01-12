<script lang="ts">
    import BigHeader from "./BigHeader.svelte";
    import Highlights from "./Highlights.svelte";
    import ProjectList from "./ProjectList.svelte";
    import type { PageData } from "./$types";
    import { HeaderType } from '$lib/types';

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
        margin-top: calc(var(--padding) * 2);
        opacity: 0.4;
    }
</style>
