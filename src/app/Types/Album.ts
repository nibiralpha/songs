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