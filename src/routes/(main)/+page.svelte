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

<!-- <PageBody>
    <p>
        Hello world, it's me, Matt! Welcome to my internet living room.
        This is where I put the stuff I'm creating and thinking about, and where I maintain an ongoing archive of projects and explorations.
        If you see fit to poke around, I hope you find something cool. Thanks for visiting!
    </p>
</PageBody> -->

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
