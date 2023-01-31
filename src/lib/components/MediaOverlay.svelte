<script lang="ts">
    import DateUtils from '$lib/DateUtils';
    import HomeLink from '$lib/components/HomeLink.svelte';
    import type { ZonedDateTime } from '@js-joda/core';

    export let title: string;
    export let date: ZonedDateTime;
</script>

<div class="overlay">
    <div class="meta header">
        <div class="metadata">
            <h1 class="title">{title}</h1>
            <div class="date">
                {DateUtils.renderLong(date)}
            </div>
        </div>
        <HomeLink />
    </div>
</div>

<style lang="postcss">
    .overlay {
        z-index: 1;
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        pointer-events: none;
    }

    .meta {
        padding: 1em;
    }

    .header {
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.75),
            cubic-bezier(0.25, 0, 0.75, 1),
            rgba(0, 0, 0, 0)
        );
        padding-bottom: 2em;
        pointer-events: all;

        display: flex;
        flex-direction: row;
        align-items: top;
        justify-content: space-between;
    }

    .title {
        font-family: 'Hobeaux';
        font-feature-settings: 'salt';
        font-weight: bold;
        font-size: 1.2em;
        line-height: 1;
    }

    .date {
        color: var(--transparent-light-text);
    }
</style>