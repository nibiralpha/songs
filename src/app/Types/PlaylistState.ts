import { PlaylistDescription, PlaylistTrack } from "./Playlist";

export interface PlaylistStateInterface {
  list: PlaylistTrack[];
  loading: boolean;
  data: PlaylistDescription;
  // error: boolean;
  // errorResponse: object;
}

export interface PlaylistInterface {
  [playlistId: string | number]: PlaylistStateInterface;
}

// import { PlaylistDescription, PlaylistTrack } from "./Playlist";

// export interface PlaylistInterface {
//   Fresh_pop: PlaylistStateInterface;
// }

// export interface PlaylistStateInterface {
//   list: PlaylistTrack[];
//   loading: boolean;
//   data: PlaylistDescription
//   // error: boolean;
//   // errorResponse: object;
// }

