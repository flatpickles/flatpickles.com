<script lang="ts">
    import { type ProjectData, ProjectType } from '$lib/types';

    export let project: ProjectData;
</script>

<div class="media-outer-container">
    <div class="media-inner-container">
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
    <div class="loading">
        Loading...
    </div>
</div>

<style>
    .media-outer-container {
        position: absolute;
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .loading {
        position: absolute;
        height: 100%;
        z-index: 0;

        display: flex;
        flex-direction: row;
        align-items: center;

        font-size: 1.2rem;
        color: rgba(255, 255, 255, 50%);
    }

    .media-inner-container {
        height: 100%;
        z-index: 1;

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