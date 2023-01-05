<script lang="ts">
    import type { ProjectData } from "$lib/types";
    import type { PageData, PageLoad } from "./$types";

    export let data: PageLoad | any; // suppress warnings
    const project: ProjectData = data.project;
</script>

<svelte:head>
    <title>{project.title}</title> 
</svelte:head>

<div class="wrapper">
    <div class="media-container">
        <div class="media">
            <img src={project.assetPath} alt={project.title}/>
        </div>
    </div>
    <div class="overlay">
        <div class="header">
            {project.title}
        </div>
        <div class="footer">
            {project.timestamp}
        </div>
    </div>
</div>

<style lang="scss">
    img {
        max-height: 100%;
        max-width: 100%;
        object-fit: contain;
        image-resolution: from-image;
    }

    .media-container {
        position: absolute;
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .media {
        height: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .overlay {
        z-index: 1;
    }
</style>