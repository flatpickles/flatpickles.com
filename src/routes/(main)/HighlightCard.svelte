<script lang="ts">
    export let image: string;
    export let title: string;
</script>

<div class="card" style="--image-url: url({image})">
    <div class="overlay">
        <div class="title">
            {title}
        </div>
    </div>
</div>

<style lang="scss">
    .card {
        height: 100px;
        width: 200px;

        background-image: var(--image-url);
        background-size: cover;
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
    }
</style>