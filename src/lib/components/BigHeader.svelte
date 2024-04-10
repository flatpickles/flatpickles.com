<script lang="ts">
    export let linkHome = false;
</script>

<div class="header">
    {#if linkHome}
        <a href="/">
            <img src="/img/mattnichols.svg" alt="Matt Nichols" />
        </a>
    {:else}
        <img src="/img/mattnichols.svg" alt="Matt Nichols" />
    {/if}
</div>

<style>
    img {
        width: 100%;
        height: 100%;
        display: block;
    }
</style>
