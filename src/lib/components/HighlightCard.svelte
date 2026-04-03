<script lang="ts">
    export let title: string;
    export let link: string;
    export let image: string;
</script>

<a href={link} class="card">
    <img src={image} alt={title} />
    <div class="overlay">
        <h1 class="title">
            {title}
        </h1>
    </div>
</a>

<style>
    img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }

    .card {
        position: relative;
        display: block;
        height: 7em;
        background-image: var(--image-url);
        background-size: cover;
        flex: 1 0 11em;
        text-decoration: none;
        border-radius: 1em;
        overflow: hidden;
        isolation: isolate;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.2);
        transition: transform 0.1s ease-out, box-shadow 0.1s ease-out;
    }

    @media (hover: hover) {
        .card:hover {
            transform: scale(1.03);
            box-shadow: 0 0 0.7em rgba(0, 0, 0, 0.3);
        }
    }

    .overlay {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        background-image: linear-gradient(
            rgba(0, 0, 0, 0),
            cubic-bezier(0.25, 0, 0.75, 1),
            rgba(0, 0, 0, 0.8)
        );
    }

    .title {
        padding: 1.1em;
        user-select: none;

        font-family: 'Hobeaux';
        font-feature-settings: 'salt';
        font-weight: bold;
        line-height: 1;
        font-size: 1.2em;
        color: rgba(255, 255, 255, 100%);
    }
</style>
