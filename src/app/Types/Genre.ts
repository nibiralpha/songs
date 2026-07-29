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

export type Genre = keyof typeof Genres;