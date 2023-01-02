<script lang="ts">
    const projectData = [
        {
            name: "Test project 1",
            type: "Test type",
            date: "10/29/22",
            link: "https://zombo.com"
        },
        {
            name: "Test project 2",
            type: "Test type",
            date: "10/29/22",
            link: "https://zombo.com"
        },
        {
            name: "Test project 3",
            type: "Test type",
            date: "10/29/22",
            link: "https://zombo.com"
        },
        {
            name: "Test project 4",
            type: "Test type",
            date: "10/29/22",
            link: "https://zombo.com"
        },
    ];
</script>

<table>
    <thead>
        <tr>
            <th class="project-header project-name">Project Name</th>
            <th class="project-header project-type">Project Type</th>
            <th class="project-header project-date">Date</th>
        </tr>
    </thead>
    {#each projectData as project}
        <tr>
            <td class="project-data project-name">
                <a href={project.link}>{project.name}</a>
            </td>
            <td class="project-data project-type">
                {project.type}
            </td>
            <td class="project-data project-date">
                {project.date}
            </td>
        </tr>
    {/each}
</table>

<style>
    table {
        border-collapse: collapse;
    }

    thead {
        text-align: left;
        border-bottom: 2px solid #000;
        font-family: 'Hobeaux';
        font-size: 1.2em;
    }

    a {
        color: #000;
        text-decoration: none;
    }

    .project-data {
        padding-top: calc(var(--padding) / 4);
        font-size: 1.2em;
    }

    .project-name {
        padding-right: var(--padding);
        width: 60%;
    }

    .project-type {
        padding-right: var(--padding);
        white-space: nowrap;
    }

    .project-date {
        width: 1px;
    }
</style>