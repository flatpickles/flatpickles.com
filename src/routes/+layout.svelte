<script lang='ts'>
  import 'ress';
  import '../fonts.css';
  import '../global.css';
</script>

<slot />

<style>
    /*
        Each group layout contains and further configures a single div with
        class 'wrapper'. This wrapper is not contained within this because
        each group may configure a different style (colors etc.)
    */
    :global(.wrapper) {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
