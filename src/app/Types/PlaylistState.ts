import { PlaylistDescription, PlaylistTrack } from "./Playlist";

export interface PlaylistInterface {
  playlist1: PlaylistStateInterface;
}

export interface PlaylistStateInterface {
  list: PlaylistTrack[];
  loading: boolean;
  data: PlaylistDescription
  // error: boolean;
  // errorResponse: object;
}
