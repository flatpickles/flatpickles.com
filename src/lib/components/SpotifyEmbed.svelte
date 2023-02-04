<script lang="ts">
    export let link: string;

    enum EmbedType {
        Track,
        Album,
        Playlist,
        Unknown
    };

    let defaultHeights: Record<EmbedType, string> = {
        [EmbedType.Track]: "152",
        [EmbedType.Album]: "380",
        [EmbedType.Playlist]: "380",
        [EmbedType.Unknown]: "0",
    }

    const entityID = link.split('spotify.com')[1] ?? "/" + link;
    const embedLink = 'https://open.spotify.com/embed' + entityID;
    const type =
        entityID.indexOf('track') == 1 ? EmbedType.Track :
        entityID.indexOf('album') == 1 ? EmbedType.Album :
        entityID.indexOf('playlist') == 1 ? EmbedType.Playlist :
        EmbedType.Unknown;
    if (type == EmbedType.Unknown) throw new Error('Embed type not yet supported.');
</script>

<iframe
    title="Spotify Embed"
    style="border-radius:12px"
    src={embedLink}
    width="100%"
    height={defaultHeights[type]}
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy">
</iframe>
