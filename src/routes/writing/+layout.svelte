<script lang="ts">
    import { Body } from 'svelte-body';
</script>

<Body class="writing" />
<div class="writing wrapper">
    <div class="writing-container">
        <slot></slot>
    </div>
</div>

<style>
    :global(.writing) {
        background-color: rgb(255, 255, 255);
    }

    .writing-container {
        max-width: var(--page-width);
        padding-top: var(--page-top-bottom-padding);
        padding-bottom: var(--page-top-bottom-padding);
        padding-left: 1em;
        padding-right: 1em;
    }
</style>