import { PlaylistDescription, PlaylistTrack } from "./Playlist";

export interface PlaylistInterface {
  Fresh_pop: PlaylistStateInterface;
}

export interface PlaylistStateInterface {
  list: PlaylistTrack[];
  loading: boolean;
  data: PlaylistDescription
  // error: boolean;
  // errorResponse: object;
}
