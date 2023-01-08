<script>
    import { Body } from 'svelte-body';
	import { onMount } from 'svelte';

    onMount(() => {
        configureFullHeight();
        window.addEventListener('resize', configureFullHeight);
    });

    function configureFullHeight() {
        // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        console.log(window.innerHeight);
    }
</script>

<Body class="media" />
<div class="media wrapper">
    <slot></slot>
</div>

<style lang="scss">
    :global(.media) {
        color: #FFF;
        background-color: rgb(0, 0, 0);

        height: 100vh;
        height: calc(var(--vh, 1vh) * 100);
        overflow: hidden; /* No mobile scroll */
    }
</style>