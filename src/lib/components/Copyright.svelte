<script lang="ts">
    const nameTextOptions = [
        'Matt Nichols',
        'Flat Pickles',
    ];
    let currentNameText = nameTextOptions[0];
    let textAnimationPosition = 0;
    let textAnimationTimeout: NodeJS.Timeout | undefined;
    let forward = true;

    function mouseEnter() {
        forward = true;
        animateName();
    }

    function mouseLeave() {
        forward = false;
        animateName();
    }

    function animateName() {
        // Clear current animation
        if (textAnimationTimeout) clearTimeout(textAnimationTimeout);
        textAnimationTimeout = undefined;
        
        // Update display
        if (nameTextOptions.length != 2) throw new Error('There should only be two name options!');
        const textLength = Math.max(nameTextOptions[0].length, nameTextOptions[1].length);
        textAnimationPosition = textAnimationPosition + (forward ? 1 : -1);
        textAnimationPosition = Math.max(0, Math.min(textLength, textAnimationPosition));
        currentNameText = nameTextOptions[1].substring(0, textAnimationPosition) + nameTextOptions[0].substring(textAnimationPosition);
         
        // Schedule next update
        if (textAnimationPosition > 0 && textAnimationPosition < textLength) {
            textAnimationTimeout = setTimeout(animateName, 100);
        }
    }
</script>

<footer class="copyright" on:mouseenter={mouseEnter} on:mouseleave={mouseLeave}>
    Copyright &copy {new Date().getFullYear()} {currentNameText}
</footer>

<style>
    .copyright {
        text-align: center;
        margin-top: 2em;

        font-family: 'Vulf Mono';
        font-size: 0.9em;
        color: rgba(0, 0, 0, 30%);
    }
</style>