<script lang="ts">
    import type { ProjectData } from "$lib/types";
    import type { PageLoad } from "./$types";

    export let data: PageLoad | any; // suppress warnings
    const project: ProjectData = data.project;
    const markdown: string = data.mdString;
</script>

{markdown}