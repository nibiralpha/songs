import { TrackData } from "./PopulerSongs";

export interface MusicInterface {
  populerSongs: MusicStateInterface
}

export interface MusicStateInterface {
  list: TrackData[];
  loading: boolean;
  // error: boolean;
  // errorResponse: object;
}
