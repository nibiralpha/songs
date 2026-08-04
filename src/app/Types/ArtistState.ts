import { Artist, ArtistDetails, DeezerTrack } from "./Artist";

export interface ArtistInterface {
  artist: ArtistStateInterface,
  artistDetails: ArtistDetailStateInterface,
  artistSongs: ArtistSongsDetailStateInterface
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
