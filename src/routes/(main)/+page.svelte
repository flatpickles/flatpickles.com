<script lang="ts">
    import { dataset_dev } from "svelte/internal";
    import BigHeader from "./BigHeader.svelte";
    import Highlights from "./Highlights.svelte";
    import PageBody from "./PageBody.svelte";
    import ProjectList from "./ProjectList.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>Flat Pickles</title> 
</svelte:head>

<BigHeader text="Flat Pickles" />

<PageBody>
    <p>
        Hello world, it's me, Matt! Welcome to my internet living room.
        This is where I put the stuff I'm creating and thinking about, and where I maintain an ongoing archive of projects and explorations.
        If you see fit to poke around, I hope you find something cool. Thanks for visiting!
    </p>
</PageBody>

<Highlights />

<ProjectList projects={data.projects} />
