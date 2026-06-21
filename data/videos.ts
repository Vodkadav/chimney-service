/**
 * Before/after videos. `youtubeId` is a YouTube video id; text resolves to
 * messages → Videos.items.<key>.{title,caption}.
 *
 * These are PLACEHOLDER video ids so the embeds work out of the box. Replace
 * each `youtubeId` with the company's real before/after footage.
 */
export interface BeforeAfterVideo {
  key: string;
  youtubeId: string;
}

export const beforeAfterVideos: BeforeAfterVideo[] = [
  { key: "resortChimney", youtubeId: "aqz-KE-bpKQ" },
  { key: "kitchenDuct", youtubeId: "ScMzIvxBSi4" },
  { key: "loungeFireplace", youtubeId: "ysz5S6PUM-U" },
  { key: "rooftopFlue", youtubeId: "C0DPdy98e4c" },
];
