<script lang="ts">
    import HomeLink from '$lib/Components/HomeLink.svelte';

    export let title: string;
    export let date: Date;
</script>

<div class="overlay">
    <div class="meta header">
        <span class="title">{title}</span>
        <HomeLink opacity=0.7 />
    </div>
    <div class="meta footer">
        <span class="date">
            {date.toLocaleDateString('en-us', {
                day: 'numeric',
                year: 'numeric',
                month: 'long'
            })}
        </span>
    </div>
</div>

<style>
    .overlay {
        z-index: 1;
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        pointer-events: none;
    }

    .meta {
        padding: var(--padding);

        font-family: 'Hobeaux';
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

    .footer {
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
        padding-top: calc(var(--padding) * 2);
        text-align: right;
    }

    .title {
        opacity: 70%;
        font-size: 1.25em;
    }

    .date {
        opacity: 70%;
    }
</style>