export interface AlbumResponse {
  id: number;
  title: string;
  upc: string;
  link: string;
  share: string;

  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;

  genre_id: number;
  genres: DeezerGenreList;

  label: string;
  nb_tracks: number;
  duration: number;
  fans: number;
  release_date: string;
  record_type: string;

  available: boolean;
  tracklist: string;

  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;

  contributors: DeezerContributor[];
  artist: DeezerArtist;

  type: "album";

  tracks: {
    data: DeezerTrack[];
  };
}

export interface DeezerGenreList {
  data: DeezerGenre[];
}

export interface DeezerGenre {
  id: number;
  name: string;
  picture: string;
  type: "genre";
}

export interface DeezerArtist {
  id: number;
  name: string;

  picture?: string;
  picture_small?: string;
  picture_medium?: string;
  picture_big?: string;
  picture_xl?: string;

  link?: string;
  share?: string;

  radio?: boolean;

  tracklist: string;
  type: "artist";
}

export interface DeezerContributor extends DeezerArtist {
  role: string;
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
  md5_image: string;

  artist: DeezerTrackArtist;
  album: DeezerTrackAlbum;

  type: "track";
}

export interface DeezerTrackArtist {
  id: number;
  name: string;
  tracklist: string;
  type: "artist";
}

export interface DeezerTrackAlbum {
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

export interface ArtistAlbumsResponse {
  data: ArtistAlbum[];
}

export interface ArtistAlbum {
  id: number;
  title: string;
  link: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  genre_id: number;
  fans: number;
  release_date: string;
  record_type: "album";
  tracklist: string;
  explicit_lyrics: boolean;
  type: "album";
}