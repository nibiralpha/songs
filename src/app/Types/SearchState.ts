import { ArtistAlbum } from "./Album";
import { Artist } from "./Artist";
import { DeezerSearchResponse, DeezerSearchTrack } from "./Search";

export interface SearchInterface {
  data: SearchStateInterface
}

export interface SearchStateInterface {
  data: DeezerSearchResponse;
  loading: boolean;
  // error: boolean;
  // errorResponse: object;
}