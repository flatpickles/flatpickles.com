<script lang="ts">
    import type { ProjectData } from "$lib/types";

    export let data: ProjectData;
</script>

<svelte:head>
    <title>{data.title}</title> 
</svelte:head>

{data.title}

<img src={data.assetPath} alt={data.title}/>