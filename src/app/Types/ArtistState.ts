import { Artist } from "./Artist";

export interface ArtistInterface {
  artist: ArtistStateInterface,
}

export interface ArtistStateInterface {
  list: Artist[];
  loading: boolean;
  // error: boolean;
  // errorResponse: object;
}
