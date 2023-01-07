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
        margin-top: var(--padding);

        display: flex;
        flex-direction: column;

        font-size: 1.2em;
    }

    .project-row {
        padding: calc(var(--padding) / 2);
        border-radius: calc(var(--padding) / 2);

        display: flex;
        flex-direction: row;
        column-gap: var(--padding);
        justify-content: space-between;
        flex-wrap: wrap;
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
        column-gap: var(--padding);
        justify-content: space-between;

        color:rgba(0, 0, 0, 60%)
    }
</style>