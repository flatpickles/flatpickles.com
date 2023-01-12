<script lang="ts">
    import type { ProjectData } from '$lib/types';

    export let project: ProjectData;
</script>

<div class="writing-container">
    <div class="title">
        {project.title}
    </div>
    
    <div class="date">
        {project.date.toLocaleDateString('en-us', {
            day: 'numeric',
            year: 'numeric',
            month: 'long'
        })}
    </div>

    <div class="writing-body">
        <svelte:component this={project.component} />
    </div>
</div>

<style>
    .writing-container {
        --writing-container-top-bottom-padding: calc(
            max(
                min(100px, 100/7 * 1vw),
                calc(var(--padding) * 4)
            )
        );

        max-width: var(--page-width);
        padding-top: var(--writing-container-top-bottom-padding);
        padding-bottom: var(--writing-container-top-bottom-padding);
        padding-left: var(--padding);
        padding-right: var(--padding);
    }

    .title {
        font-family: 'Hobeaux';
        font-size: 2em;
    }

    .date {
        opacity: 0.5;
        font-size: 1.1em;
    }

    .writing-body {
        padding-top: var(--padding);
        font-size: 1.1em;
    }
</style>