export interface Artist {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  radio: boolean;
  tracklist: string;
  position: number;
  type: "artist";
}

export interface ArtistDetails {
  id: number;
  name: string;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  nb_album: number;
  nb_fan: number;
  radio: boolean;
  tracklist: string;
  type: "artist";
}

export interface ArtistDetailResponse {
  data: ArtistDetails;
}

export interface ArtistResponse {
  data: Artist[];
}

export interface DeezerTrackResponse {
  data: DeezerTrack[];
}

export interface DeezerTrack {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  contributors: DeezerContributor[];
  md5_image: string;
  artist: DeezerMinimalArtist;
  album: DeezerAlbum;
  type: "track";
}

export interface DeezerContributor {
  id: number;
  name: string;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  radio: boolean;
  tracklist: string;
  type: "artist";
  role: string;
}

export interface DeezerMinimalArtist {
  id: number;
  name: string;
  tracklist: string;
  type: "artist";
}

export interface DeezerAlbum {
  id: number;
  title: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  tracklist: string;
  type: "album";
}

export interface RelatedArtistApiResponse {
  data: RelatedArtistResponse[];
}

export type RelatedArtistResponse = Omit<ArtistDetails, "share">;


