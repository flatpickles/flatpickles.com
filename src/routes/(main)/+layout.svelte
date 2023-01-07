<script>
    import CopyrightFooter from "./CopyrightFooter.svelte";
</script>

<div class="main wrapper">
    <div class="main-container">
        <slot></slot>
        <CopyrightFooter/>
    </div>
</div>

<style lang="scss">
    .main-container {
        width: 100%;
        max-width: var(--page-width);
        padding-top: var(--page-top-bottom-padding);
        padding-bottom: var(--page-top-bottom-padding);
        padding-left: var(--padding);
        padding-right: var(--padding);

        display: flex;
        flex-direction: column;
    }

    :global(.main-container > *:not(:first-child)) {
        margin-top: var(--padding);
    }
</style>