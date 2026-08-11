import { SearchTrack, TrackData } from "./PopulerSongs";

export interface MusicInterface {
  populerSongs: MusicStateInterface,
  // popSongs: MusicStateInterface,
  electronicSongs: MusicStateInterface,
  classicalSongs: MusicStateInterface,
  tracks: SingleSongsStateInterface
}

export interface MusicStateInterface {
  list: TrackData[];
  loading: boolean;
  // error: boolean;
  // errorResponse: object;
}
export interface SingleSongsStateInterface {
  list: SearchTrack[];
  loading: boolean;
  // error: boolean;
  // errorResponse: object;
}
