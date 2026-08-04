import { ArtistAlbum } from "./Album";
import { Artist, ArtistDetails, DeezerTrack } from "./Artist";

export interface ArtistInterface {
  artist: ArtistStateInterface,
  artistDetails: ArtistDetailStateInterface,
  artistSongs: ArtistSongsDetailStateInterface,
  artistAlbum: ArtistAlbumInterface
}

export interface ArtistStateInterface {
  list: Artist[];
  loading: boolean;
  // error: boolean;
  // errorResponse: object;
}

export interface ArtistDetailStateInterface {
  data: ArtistDetails | null;
  loading: boolean;
  // error: boolean;
  // errorResponse: object;
}

export interface ArtistSongsDetailStateInterface {
  data: DeezerTrack[];
  loading: boolean;
  // error: boolean;
  // errorResponse: object;
}

export interface ArtistAlbumInterface {
  data: ArtistAlbum[];
  loading: boolean;
  // error: boolean;
  // errorResponse: object;
}
