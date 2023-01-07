<script lang="ts">
    import type { ProjectData } from "$lib/types";

    export let projects: ProjectData[];
</script>

<table>
    <!-- <thead>
        <tr>
            <th class="project-header project-name">Project Name</th>
            <th class="project-header project-type">Project Type</th>
            <th class="project-header project-date">Date</th>
        </tr>
    </thead> -->
    {#each projects as project}
        <tr>
            <td class="project-data project-name">
                <a href={project.url}>{project.title}</a>
            </td>
            <td class="project-data project-type">
                {project.type}
            </td>
            <td class="project-data project-date">
                {project.timestamp.toLocaleDateString('en-us', {
                    day: 'numeric',
                    year: 'numeric',
                    month: 'short'
                })}
            </td>
        </tr>
    {/each}
</table>

<style>
    table {
        border-collapse: collapse;
        margin-top: calc(var(--padding) * 1.5);
    }

    thead {
        text-align: left;
        border-bottom: 2px solid #000;
        font-family: 'Hobeaux';
        font-size: 1.2em;
    }

    tr:nth-child(odd) td{
        background-color: rgba(0, 0, 0, 7%);
    }

    a {
        color: #000;
        text-decoration: none;
    }

    .project-data {
        /* todo - this is janky */
        padding-top: calc(var(--padding) / 4);
        padding-bottom: calc(var(--padding) / 2);
        padding-left: calc(var(--padding) / 2);
        padding-right: calc(var(--padding) / 2);
        font-size: 1.2em;
        border-radius: calc(var(--padding) / 2);
    }

    .project-name {
        padding-right: var(--padding);
        width: 50%;
    }

    .project-type {
        padding-right: var(--padding);
        white-space: nowrap;
    }

    .project-date {
        width: 1px;
        white-space: nowrap;
        text-align: right;
    }
</style>