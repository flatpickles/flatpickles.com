<script lang="ts">
    import HomeLinkOverlay from '$lib/components/HomeLinkOverlay.svelte';
    import type { NoteData } from '$lib/types';
    import NoteDisplay from '../../notes/NoteDisplay.svelte';
    import type { PageLoad } from './$types';

    export let data: PageLoad | any; // suppress warnings
    export let note: NoteData = data.note;
</script>

<HomeLinkOverlay />

<NoteDisplay
    note = {note}
    exclusive = {true}
/>

