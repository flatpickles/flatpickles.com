<script lang="ts">
    import HomeLink from '$lib/components/HomeLink.svelte';

    export let title: string;
    export let date: Date;
</script>

<div class="overlay">
    <div class="meta header">
        <div class="metadata">
            <div class="title">{title}</div>
            <div class="date">
                {date.toLocaleDateString('en-us', {
                    day: 'numeric',
                    year: 'numeric',
                    month: 'long'
                })}
            </div>
        </div>
        <HomeLink opacity=0.7 />
    </div>
</div>

<style>
    .overlay {
        z-index: 1;
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        pointer-events: none;
    }

    .meta {
        padding: var(--padding);
    }

    .header {
        background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
        padding-bottom: calc(var(--padding) * 2);
        pointer-events: all;

        display: flex;
        flex-direction: row;
        align-items: top;
        justify-content: space-between;
    }

    .metadata {
        opacity: 80%;
    }

    .title {
        font-size: 1.25em;
        font-family: 'Hobeaux';
    }
</style>