<script lang="ts">
    export let matt: boolean;
</script>

<div class="header">
    {#if matt}
        <img src="/images/mattnichols.svg" alt="Matt Nichols"/>
    {:else}
        <img src="/images/flatpickles.svg" alt="Flat Pickles"/>
    {/if}
</div>

<style>
    img {
        width: 100%;
        height: 100%;
    }
</style>