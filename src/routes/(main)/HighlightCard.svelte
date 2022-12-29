<script lang="ts">
    export let title: string;
    export let link: string;
    export let image: string;
</script>

<a href={link} class="card" style="--image-url: url({image})">
    <div class="overlay">
        <div class="title">
            {title}
        </div>
    </div>
</a>

<style lang="scss">
    .card {
        height: var(--highlight-height);
        background-image: var(--image-url);
        background-size: cover;
        flex: 1 0 var(--highlight-min-width);
        filter: drop-shadow(0 0 calc(var(--padding) / 4) rgba(0, 0, 0, 0.1));
        text-decoration: none;
    }

    .overlay {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9));
    }

    .title {
        font-family: 'Hobeaux';
        font-size: 1.2em;
        color: #FFF;
        padding: var(--padding);
        user-select: none;
    }
</style>