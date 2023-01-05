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
        <div class="meta header">
            <a class="home" href="/">Flat Pickles</a>
            <span class="title">/ {project.title}</span>
        </div>
        <div class="meta footer">
            <span class="timestamp">Timestamp To Do</span>
        </div>
    </div>
</div>

<style lang="scss">
    a {
        color: inherit;
        text-decoration: none;
    }

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
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .meta {
        padding: var(--padding);

        font-family: 'Hobeaux';
    }

    .footer {
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