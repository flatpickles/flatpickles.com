<script lang="ts">
    import { HeaderType } from '$lib/types';

    import flatPicklesImg from '$lib/assets/flatpickles.svg';
    import notesImg from '$lib/assets/notes.svg';
    import mattNicholsImg from '$lib/assets/mattnichols.svg';

    export let type: HeaderType;
</script>

<div class="header">
    <!-- Load all images so they're ready to go for CSR, mas rapido -->
    <img src={flatPicklesImg} alt="Flat Pickles" class:hidden={type != HeaderType.FlatPickles}/>
    <img src={notesImg} alt="Notes and Such" class:hidden={type != HeaderType.NotesAndSuch}/>
    <img src={mattNicholsImg} alt="Matt Nichols" class:hidden={type != HeaderType.MattNichols}/>
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