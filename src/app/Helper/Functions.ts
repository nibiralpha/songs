import { GenreName, Genres, GenreValue } from "@Constant/Genra";

export const formatTrackDuration = (totalSeconds: number) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}.${seconds.toString().padStart(2, '0')}`;
};

export const getGenreNameByValue = (value: GenreValue): GenreName | undefined => {
  const entry = Object.entries(Genres).find(([_, val]) => val === value);
  return entry ? (entry[0] as GenreName) : undefined;
};
