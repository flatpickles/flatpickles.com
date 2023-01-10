var ProjectType = /* @__PURE__ */ ((ProjectType2) => {
  ProjectType2["Image"] = "Image";
  ProjectType2["Video"] = "Video";
  ProjectType2["Audio"] = "Audio";
  ProjectType2["Live"] = "Live Graphics";
  ProjectType2["WebApp"] = "Web App";
  ProjectType2["VideoEffect"] = "Video Effect";
  ProjectType2["Writing"] = "Writing";
  ProjectType2["Playlist"] = "Playlist";
  ProjectType2["Transcription"] = "Transcription";
  ProjectType2["Other"] = "Other";
  return ProjectType2;
})(ProjectType || {});
var HeaderType = /* @__PURE__ */ ((HeaderType2) => {
  HeaderType2[HeaderType2["FlatPickles"] = 0] = "FlatPickles";
  HeaderType2[HeaderType2["NotesAndSuch"] = 1] = "NotesAndSuch";
  HeaderType2[HeaderType2["MattNichols"] = 2] = "MattNichols";
  return HeaderType2;
})(HeaderType || {});
const extensionMap = {
  "png": "Image",
  "jpg": "Image",
  "svg": "Image",
  "mp4": "Video",
  "mp3": "Audio"
};
export {
  HeaderType as H,
  ProjectType as P,
  extensionMap as e
};
