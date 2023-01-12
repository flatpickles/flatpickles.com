<script lang="ts">
    import type { ProjectData } from "$lib/types";

    export let projects: ProjectData[];
</script>

<div class="project-list">
    {#each projects as project}
        <a href={project.url} class="project-row">
            <div class="project-title">
                {project.title}
            </div>
            <div class="project-metadata">
                <div class="project-type">
                    {project.type}
                </div>
                <div class="project-date">
                    {project.date.toLocaleDateString('en-us', {
                        day: 'numeric',
                        year: 'numeric',
                        month: 'short'
                    })}
                </div>
            </div>
        </a>
    {/each}
</div>

<style>
    a {
        color: inherit;
        text-decoration: none;
    }

    .project-list {
        display: flex;
        flex-direction: column;

        font-size: 1.2em;
    }

    .project-row {
        padding: 0.5em;
        border-radius: 0.5em;

        display: flex;
        flex-direction: row;
        column-gap: 1em;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: baseline;
    }

    .project-row:nth-child(odd) {
        background-color: rgba(0, 0, 0, 7%);
    }

    .project-title {
        flex-basis: 300px;
        flex-grow: 2;

        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .project-metadata {
        flex-basis: 300px;
        flex-grow: 1;

        display: flex;
        flex-direction: row;
        column-gap: 1em;
        justify-content: space-between;

        color: rgba(0, 0, 0, 60%);
    }
</style>