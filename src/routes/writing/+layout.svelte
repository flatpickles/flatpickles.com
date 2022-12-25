<script>
    import { Body } from 'svelte-body';
</script>

<Body class="writing" />
<div class="writing">
    <slot></slot>
</div>

<style lang="scss">
    :global(.writing) {
        background-color: #FFF;
        height: 100vh;
    }
</style>