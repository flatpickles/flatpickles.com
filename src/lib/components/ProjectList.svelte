<script lang="ts">
    import { DateUtils } from '$lib/Utils';
    import type { ProjectData } from '$lib/types';

    export let projects: ProjectData[];
    let hoverVisible = false;

    // Function to set the icon position based on the hovered row
    function setIconPosition(event: MouseEvent) {
        const projectRow = event.currentTarget as HTMLElement;
        const projectList = document.querySelector('.project-list');
        const hoverIcon = document.querySelector('.hover-icon');

        if (projectRow && projectList && hoverIcon) {
            const rowRect = projectRow.getBoundingClientRect();
            const listRect = projectList.getBoundingClientRect();
            const offsetTop = rowRect.top - listRect.top;
            (hoverIcon as HTMLElement).style.top = `${offsetTop}px`;
        }
        hoverVisible = true;
    }
</script>

<div class="project-list" on:mouseleave={() => hoverVisible = false}>
    {#each projects as project}
        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        <a href={project.url} class="project-row" on:mouseover={setIconPosition}>
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
    <img src="/img/fp-icon.svg" alt="hover icon" class="hover-icon" class:visible={hoverVisible} />
</div>

<style>
    a {
        color: inherit;
        text-decoration: none;
    }

    .project-list {
        position: relative;
        display: flex;
        flex-direction: column;
        font-size: 1.2em;
    }

    .project-row {
        position: relative;
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

    .hover-icon {
        /* todo: positioning is too magical in here; needs rework with rem units */

        pointer-events: none;
        position: absolute;
        box-sizing: content-box;
        left: -2.8em;
        top: 0;

        display: block;
        width: 1.5em;
        padding: 0.6em;

        animation: rotate 3s linear infinite;
        transition: opacity 0.3s ease, top 0.3s ease;
        opacity: 0;
    }

    @media (min-width: 800px) and (hover: hover) {
        .hover-icon.visible {
            opacity: 1;
        }
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
