<script lang="ts">
    import { Body } from 'svelte-body';
</script>

<Body class="media" />
<div class="media wrapper">
    <slot></slot>
</div>

<style lang="scss">
    :global(.media) {
        color: rgb(255, 255, 255);
        background-color: rgb(0, 0, 0);
        overflow: hidden; /* No mobile scroll */
    }
</style>