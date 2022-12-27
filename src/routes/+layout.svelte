<script lang="ts">
    import 'ress';
    import './fonts.scss';
    import './global.scss';
</script>

<div class="wrapper">
    <slot></slot>
</div>

<style>
    .wrapper {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /*
        The wrapper contains a single div with class 'backdrop', which is
        further configured in the corresponding contained layout.
    */
    :global(.backdrop) {
        width: 100%;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>