<script>
    import { Body } from 'svelte-body';
</script>

<Body class="writing" />
<div class="writing backdrop">
    <slot></slot>
</div>

<style lang="scss">
    :global(.writing) {
        background-color: #FFF;
    }
</style>