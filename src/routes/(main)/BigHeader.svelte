<script lang="ts">
    import { fit, parent_style } from '@leveluptuts/svelte-fit';

    export let text: string;
</script>

<div class="header">
    <div style={parent_style}>
        <h1 use:fit={{min_size: 12, max_size:300 }}>{text}</h1>
    </div>
</div>

<style>
    h1 {
        font-family: 'Hobeaux';
        font-weight: bold;
        white-space: nowrap;
    }
</style>