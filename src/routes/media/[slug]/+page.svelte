<script lang="ts">
    import { ProjectType, type ProjectData } from "$lib/types";
    import MediaOverlay from '../MediaOverlay.svelte';
    import type { PageLoad } from "./$types";

    export let data: PageLoad | any; // suppress warnings
    const project: ProjectData = data.project;
</script>

<svelte:head>
    <title>{project.title}</title> 
</svelte:head>

<div class="wrapper">
    <div class="media-container">
        <div class="media">
            {#if project.type == ProjectType.Image}
                <img
                    src={project.assetPath}
                    alt={project.title}
                    class="media_item"
                    class:svg={project.assetPath?.includes(".svg")}
                />
            {:else if project.type == ProjectType.Video}
                <!-- svelte-ignore a11y-media-has-caption -->
                <video class="media_item" autoplay>
                    <source src={project.assetPath} type="video/mp4">
                    <meta itemprop="name" content={project.title}>
                </video>
            {:else if project.type == ProjectType.Audio}
                <audio autoplay controls>
                    <source src={project.assetPath} type="audio/mpeg">
                </audio>
            {/if}
        </div>
    </div>

    <MediaOverlay
        title={project.title}
        date={project.timestamp}
    />
</div>

<style lang="scss">
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

    .media_item {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    .svg {
        width: 100%;
        height: 100%;
    }
</style>