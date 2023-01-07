<script lang="ts">
    import type { ProjectData } from "$lib/types";
    import type { PageLoad } from "./$types";

    export let data: PageLoad | any; // suppress warnings
    export let project: ProjectData = data.project;
</script>

<svelte:head>
    <title>{project.title}</title> 
</svelte:head>

<div class="container">
    <div class="title">
        {project.title}
    </div>
    
    <div class="date">
        {project.timestamp.toLocaleDateString('en-us', {
            day: 'numeric',
            year: 'numeric',
            month: 'long'
        })}
    </div>

    <svelte:component this={project.component} />
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
    }

    .title {
        font-size: 2em;
    }

    .date {
        font-style: italic;
        padding-bottom: 10px;
    }
</style>