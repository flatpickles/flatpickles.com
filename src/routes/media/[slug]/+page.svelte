<script lang="ts">
    import { ProjectType, type ProjectData } from "$lib/types";
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
    <div class="overlay">
        <div class="meta header">
            <a class="home" href="/">Flat Pickles</a>
            <span class="title">/ {project.title}</span>
        </div>
        <div class="meta footer">
            <span class="timestamp">
                {project.timestamp.toLocaleDateString('en-us', {
                    day: 'numeric',
                    year: 'numeric',
                    month: 'long'
                })}
            </span>
        </div>
    </div>
</div>

<style lang="scss">
    a {
        color: inherit;
        text-decoration: none;
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

    .media_item {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    .svg {
        width: 100%;
        height: 100%;
    }

    .overlay {
        z-index: 1;
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        pointer-events: none;
    }

    .meta {
        padding: var(--padding);

        font-family: 'Hobeaux';
    }

    .header {
        background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
        padding-bottom: calc(var(--padding) * 2);
        pointer-events: all;
    }

    .footer {
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
        padding-top: calc(var(--padding) * 2);
        text-align: right;
    }

    .home:hover {
        text-decoration: underline;
    }

    .title {
        opacity: 70%;
    }

    .timestamp {
        opacity: 70%;
    }
</style>