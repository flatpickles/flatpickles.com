<script lang="ts">
    export let title: string;
    export let date: Date;
</script>

<div class="overlay">
    <div class="meta header">
        <a class="home" href="/">Flat Pickles</a>
        <span class="title">/ {title}</span>
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
    a {
        color: inherit;
        text-decoration: none;
    }

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
    }

    .footer {
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
        padding-top: calc(var(--padding) * 2);
        text-align: right;
    }

    .home:hover {
        text-decoration: underline;
    }

    .title {
        opacity: 70%;
    }

    .date {
        opacity: 70%;
    }
</style>