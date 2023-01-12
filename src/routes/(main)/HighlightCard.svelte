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
        height: 7em;
        background-image: var(--image-url);
        background-size: cover;
        flex: 1 0 11em;
        filter: drop-shadow(0 0 0.5em rgba(0, 0, 0, 0.2));
        text-decoration: none;
        border-radius: calc(1em);
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
        padding: 1em;
        user-select: none;

        font-family: 'Hobeaux';
        color: #FFF;
        font-size: 1.2em;
    }
</style>