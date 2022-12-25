<script>
    import { Body } from 'svelte-body';
</script>

<Body class="main" />
<div class="main">
    <slot></slot>
</div>

<style lang="scss">
    .main {
        /* background set in global.scss */
        height: 100vh;
    }

</style>