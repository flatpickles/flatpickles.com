<script>
    import { Body } from 'svelte-body';
</script>

<Body class="media" />
<div class="media">
    <slot></slot>
</div>

<style lang="scss">
    :global(.media) {
        color: #FFF;
        background-color: rgb(0, 0, 0);
        height: 100vh;
    }
</style>