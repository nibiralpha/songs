export const Genres = {
  All: 0,
  Pop: 132,
  Rock: 152,
  RapHipHop: 116,
  Dance: 113,
  Electronic: 106,
  Jazz: 129,
  Classical: 98,
  RnBSoul: 165,
  Reggae: 144,
  Latin: 197,
  Country: 84,
} as const;

export const GenreObject = {
  All: 0,
  Pop: 132,
  Rock: 152,
  RapHipHop: 116,
  Dance: 113,
  Electronic: 106,
  Jazz: 129,
  Classical: 98,
  RnBSoul: 165,
  Reggae: 144,
  Latin: 197,
  Country: 84,
} as const;

export const GenraOrginalAndAppName = {
  0: { originalName: "All", name: "Trending Songs" },
  84: { originalName: "Country", name: "Country Songs" },
  98: { originalName: "Classical", name: "Classical Music" },
  106: { originalName: "Electronic", name: "Electronic" },
  113: { originalName: "Dance", name: "Dance Songs" },
  116: { originalName: "RapHipHop", name: "RapHipHop Songs" },
  129: { originalName: "Jazz", name: "Jazz Songs" },
  132: { originalName: "Pop", name: "Trending Songs" },
  144: { originalName: "Reggae", name: "Reggae Songs" },
  152: { originalName: "Rock", name: "Rock Songs" },
  165: { originalName: "RnBSoul", name: "RnBSoul Songs" },
  197: { originalName: "Latin", name: "Latin Songs" },
} as const;

// export type Genre = keyof typeof Genres;

export type GenreValue = (typeof Genres)[keyof typeof Genres];
export type GenreName = keyof typeof Genres;