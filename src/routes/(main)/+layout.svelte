<div class="main wrapper">
    <div class="main-container">
        <slot></slot>
    </div>
</div>

<style lang="scss">
    .main-container {
        width: 100%;
        max-width: var(--page-width);
        padding-top: var(--page-top-bottom-padding);
        padding-bottom: var(--page-top-bottom-padding);
        padding-left: 1em;
        padding-right: 1em;

        display: flex;
        flex-direction: column;
    }
</style>