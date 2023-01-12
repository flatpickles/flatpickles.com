<script lang="ts">
    import { Body } from 'svelte-body';
</script>

<Body class="writing" />
<div class="writing wrapper">
    <slot></slot>
</div>

<style lang="scss">
    :global(.writing) {
        background-color: rgb(255, 255, 255);
    }
</style>