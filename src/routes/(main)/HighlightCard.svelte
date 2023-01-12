<script lang="ts">
    export let title: string;
    export let link: string;
    export let image: string;
</script>

<a href={link} class="card">
    <img src={image} alt={title}/>
    <div class="overlay">
        <div class="title">
            {title}
        </div>
    </div>
</a>

<style lang="scss">
    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }

    .card {
        height: var(--highlight-height);
        background-image: var(--image-url);
        background-size: cover;
        flex: 1 0 var(--highlight-min-width);
        filter: drop-shadow(0 0 calc(var(--padding) / 2) rgba(0, 0, 0, 0.2));
        text-decoration: none;
        border-radius: calc(var(--padding));
        overflow: hidden;

        // https://stackoverflow.com/a/58283449/280404
        transform: translateZ(0);
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
        padding: var(--padding);
        user-select: none;

        font-family: 'Hobeaux';
        color: #FFF;
        font-size: 1.2em;
    }
</style>