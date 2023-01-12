<script lang="ts">
    import { HeaderType } from '$lib/types';
    import BigHeader from '../BigHeader.svelte';
    import LinkBar from './LinkBar.svelte';
</script>

<svelte:head>
    <title>Matt Nichols</title>
</svelte:head>

<BigHeader type={HeaderType.MattNichols} />

<LinkBar />

<div class="about-body">
    <p>
        Hello world, it's me, Matt! Welcome to my internet living room.
        This is where I put the stuff I'm creating and thinking about, and where I maintain an ongoing archive of projects and explorations.
        If you see fit to poke around, I hope you find something cool. Thanks for visiting!
    </p>
    <p>
        Here's another paragraph even, and we can see how this feels! It might not be that great. In fact, I might take all of this about text and put it straight into the trash, because let's be honest, your time is too valuable to sit here and read my nonsense. Like seriously, I can't believe you're still reading. You deserve a medal, or some similar acknowledgement of exceptional character! I'm sure you get this all the time, but you rock. Big time.
    </p>
</div>

<style>
    .about-body {
        text-align: justify;
        font-size: 1.2em;
    }
</style>