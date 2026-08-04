import { Artist, ArtistDetails } from "./Artist";

export interface ArtistInterface {
  artist: ArtistStateInterface,
  artistDetails: ArtistDetailStateInterface
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
