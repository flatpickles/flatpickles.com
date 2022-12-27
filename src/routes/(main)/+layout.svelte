<script>
    import { Body } from 'svelte-body';
</script>

<div class="main wrapper">
    <div class="container">
        <slot></slot>
    </div>
</div>

<style>
    .container {
        width: 800px;
    }
</style>