<script lang="ts">
    import mattNicholsImg from '$lib/assets/mattnichols.svg';

    export let linkHome = false;
</script>

<div class="header">
    {#if linkHome}
        <a href="/">
            <img src={mattNicholsImg} alt="Matt Nichols"/>
        </a>
    {:else}
        <img src={mattNicholsImg} alt="Matt Nichols"/>
    {/if}
</div>

<style>
    img {
        width: 100%;
        height: 100%;
        display: block;
    }
</style>