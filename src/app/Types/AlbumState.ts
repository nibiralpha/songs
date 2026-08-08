import { AlbumDetailsResponse, ArtistAlbum } from "./Album";
import { Artist, ArtistDetails, DeezerTrack, RelatedArtistResponse } from "./Artist";
import { TrackData } from "./PopulerSongs";

export interface AlbumInterface {
  album: AlbumStateInterface,
//   artistDetails: ArtistDetailStateInterface,
//   artistSongs: ArtistSongsDetailStateInterface,
//   artistAlbum: ArtistAlbumInterface,
//   relatedArtist: RelatedArtistInterface
}

export interface AlbumStateInterface {
//   tracks: DeezerTrack[];
  data: AlbumDetailsResponse | null
  loading: boolean
//   loading: boolean;
  // error: boolean;
  // errorResponse: object;
}

