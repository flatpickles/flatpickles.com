<script lang="ts">
    import { HeaderType } from '$lib/types';

    export let type: HeaderType;
</script>

<div class="header">
    <!-- Load all images so they're ready to go for CSR, mas rapido -->
    <img src="/images/flatpickles.svg" alt="Flat Pickles" class:hidden={type != HeaderType.FlatPickles}/>
    <img src="/images/notes.svg" alt="Notes and Such" class="hidden" class:hidden={type != HeaderType.NotesAndSuch}/>
    <img src="/images/mattnichols.svg" alt="Matt Nichols" class="hidden" class:hidden={type != HeaderType.MattNichols}/>
</div>

<style>
    img {
        width: 100%;
        height: 100%;
    }

    .hidden {
        display: none;
    }
</style>