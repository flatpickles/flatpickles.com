<script lang="ts">
    import type { ProjectData } from "$lib/types";
    import type { PageLoad } from "./$types";

    export let data: PageLoad | any; // suppress warnings
</script>


<svelte:head>
    <title>{data.title}</title> 
</svelte:head>


<div class="container">
    <div class="title">
        {data.title}
    </div>
    
    <div class="date">
        {data.date.toLocaleDateString('en-us', {
            day: 'numeric',
            year: 'numeric',
            month: 'long'
        })}
    </div>

    <svelte:component this={data.content} />
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