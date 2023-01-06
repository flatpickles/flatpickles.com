<script lang="ts">
  import { type ProjectData, ProjectType } from '$lib/types';

    export let project: ProjectData
</script>

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

<style>
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