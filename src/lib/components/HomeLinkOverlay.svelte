<script lang="ts">
    import { onMount } from 'svelte';
    import HomeLink from './HomeLink.svelte';
    
    const scrollDepth = 50; // px
    const bounceBack = 100;

    let scrollPosition = 0.0;
    let scrollBaseline = 0.0;
    let scrollingDown = true;
    let opacity = 1.0;

    function updateScroll(newScroll: number) {
        // Update state
        const prevScrollingDown = scrollingDown;
        scrollingDown = newScroll > scrollPosition;
        scrollPosition = newScroll;

        // Adjust baseline if fully in/out when changing directions
        if (scrollingDown != prevScrollingDown) {
            if (opacity == 0.0) {
                scrollBaseline = Math.max(0.0, scrollPosition - scrollDepth - bounceBack);
            } else if (opacity == 1.0) {
                scrollBaseline = Math.max(0.0, scrollPosition);
            }
        }

        // Update opacity relative to baseline
        opacity = 1.0 - Math.min(1.0, Math.max(0.0, (scrollPosition - scrollBaseline) / scrollDepth));
    }

    onMount(() => {
        scrollPosition = window.scrollY;
        scrollBaseline = window.scrollY;
        document.addEventListener("scroll", () => {
            updateScroll(window.scrollY);
        });
    })
</script>


<div class="home-wrapper" style="--opacity:{opacity};" class:hidden={opacity == 0}>
    <HomeLink />
</div>

<style>
    .home-wrapper {
        position: fixed;
        background-color: rgb(255, 255, 255);
        top: 1em;
        right: 1em;
        border-radius: 50%;
        opacity: var(--opacity);
    }

    .hidden {
        display: none;
    }
</style>