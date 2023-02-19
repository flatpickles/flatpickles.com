<script lang="ts">
    import { DateUtils } from '$lib/Utils';
    import type { ProjectData } from '$lib/types';

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
                    {DateUtils.renderShort(project.date)}
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
        padding: 0.7em;
        border-radius: 0.5em;
        display: flex;
        flex-direction: row;
        column-gap: 1em;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: baseline;
    }

    /* appear vertically centered in Firefox */
    @supports (-moz-appearance: none) {
        .project-row {
            padding-top: 0.75em;
            padding-bottom: 0.65em;
        }
    }

    .project-row:nth-child(odd) {
        background-color: var(--transparent-background);
    }

    .project-title {
        flex-basis: 300px;
        flex-grow: 2;

        font-weight: 500;
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

        color: var(--transparent-dark-text);
    }
</style>