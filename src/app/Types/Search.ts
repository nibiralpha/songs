import { Artist, DeezerContributor } from "./Artist";

import { ArtistAlbum } from "./Album";

export interface DeezerSearchResponse {
  tracks: DeezerSearchTrack[];
  albums: DeezerSearchTrackAlbum[];
  artists: DeezerSearchTrackArtist[];
  // playlists: DeezerSearchTrack[];
}

export interface DeezerSearchTrackResponse {
  data: DeezerSearchTrack[];
  total: number;
  next?: string;
}

export interface DeezerSearchTrack {
  id: number;
  readable: boolean;

  title: string;
  title_short: string;
  title_version: string;

  isrc?: string;

  link: string;

  duration: number;
  rank: number;

  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;

  preview: string;
  md5_image: string;

  artist: DeezerSearchTrackArtist;
  album: DeezerSearchTrackAlbum;

  type: "track";
}

export interface DeezerSearchTrackArtist {
  id: number;
  name: string;

  link: string;

  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;

  tracklist: string;

  type: "artist";
}

export interface DeezerSearchTrackAlbum {
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
  artist: Artist
}

export interface DeezerSearchArtistResponse {
  data: Artist[];
  total: number;
  next?: string;
}

export interface DeezerSearchAlbumResponse {
  data: ArtistAlbum[];
  total: number;
  next?: string;
}

export interface DeezerSearchPlaylistResponse {
  data: DeezerSearchPlaylist[];
  total: number;
  next?: string;
}

export interface DeezerSearchPlaylist {
  id: number;
  title: string;

  description?: string;

  duration?: number;

  public?: boolean;
  collaborative?: boolean;
  nb_tracks?: number;
  fans?: number;

  link: string;

  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;

  checksum?: string;

  tracklist: string;

  creation_date?: string;

  type: "playlist";
}

export interface SearchOption {
  id: number;
  label: string;
  image: string | null;
  name?: string;
  type: "track" | "album" | "artist" | "playlist";
}
