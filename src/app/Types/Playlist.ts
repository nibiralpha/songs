export interface Creator {
  id: number;
  name: string;
  tracklist: string;
  type: "user";
}

export interface PlaylistArtist {
  id: number;
  name: string;
  link: string;
  tracklist: string;
  type: "artist";
}

export interface PlaylistAlbum {
  id: number;
  title: string;
  upc: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  tracklist: string;
  type: "album";
}

export interface PlaylistTrack {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  isrc: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  md5_image: string;
  time_add: number;
  artist: PlaylistArtist;
  album: PlaylistAlbum;
  type: "track";
}

export interface PlaylistDescription {
  id: number;
  title: string;
  description: string;
  duration: number;
  public: boolean;
  is_loved_track: boolean;
  collaborative: boolean;
  nb_tracks: number;
  fans: number;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  checksum: string;
  tracklist: string;
  creation_date: string;
  add_date: string;
  mod_date: string;
  md5_image: string;
  picture_type: "playlist";
  creator: Creator;
  type: "playlist";
}

export interface PlaylistResponse {
  PlaylistDescription: PlaylistDescription,
  tracks: {
    data: PlaylistTrack[];
  };
}

export interface PlaylistResponse extends PlaylistDescription {
  tracks: {
    data: PlaylistTrack[];
  };
}

export interface PlaylistData {
  description: PlaylistDescription
  tracks: {
    data: PlaylistTrack[];
  };
}