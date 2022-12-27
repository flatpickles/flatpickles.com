<script>
    import { Body } from 'svelte-body';
</script>

<div class="main backdrop">
    <div class="container">
        <slot></slot>
    </div>
</div>

<style>
    .container {
        width: 800px;
        /* display: flex;
        flex-direction: column;
        align-items: center; */
    }
</style>