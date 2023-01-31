<script lang="ts">
    import DateUtils from '$lib/DateUtils';
    import type { ProjectData } from '$lib/types';

    export let project: ProjectData;
</script>

<article class="piece">
    <header class="piece-header">
        <h1 class="piece-title">
            {project.title}
        </h1>
        
        <time class="piece-date" datetime={project.date.toString()}>
            {DateUtils.renderLong(project.date)}
        </time>
    </header>

    <section class="piece-body">
        <svelte:component this={project.component} />
    </section>
</article>

<style>
    .piece-title {
        font-family: 'Hobeaux';
        font-feature-settings: 'salt';
        font-weight: bold;
        font-size: 2em;
    }

    .piece-date {
        color: var(--transparent-dark-text);
        font-size: 1em;
    }

    .piece-body {
        padding-top: 1em;
        font-size: 1.1em;
    }
</style>