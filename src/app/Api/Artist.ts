import axios, { AxiosResponse } from "axios";
import { BASEURL } from "@Constant/Api";
import { ArtistDetailResponse, ArtistResponse, DeezerTrackResponse, RelatedArtistApiResponse, RelatedArtistResponse } from "@app-types/Artist";
import { ArtistAlbumsResponse } from "../Types/Album";

const getArtist = async (): Promise<AxiosResponse<ArtistResponse>> => {
  const response = await axios.get<ArtistResponse>(`${BASEURL}/api/artist`);
  return response;
};

const getArtistByID = async (
  id: number,
): Promise<AxiosResponse<ArtistDetailResponse>> => {
  const response = await axios.get<ArtistDetailResponse>(
    `${BASEURL}/api/artist_detail/${id}`,
  );
  return response;
};

const getArtistTopSongsByID = async (
  id: number,
): Promise<AxiosResponse<DeezerTrackResponse>> => {
  const response = await axios.get<DeezerTrackResponse>(
    `${BASEURL}/api/artist_top_songs/${id}`,
  );
  return response;
};

const getArtistAlbumByID = async (
  id: number,
): Promise<AxiosResponse<ArtistAlbumsResponse>> => {
  const response = await axios.get<ArtistAlbumsResponse>(
    `${BASEURL}/api/artist_album/${id}`,
  );
  return response;
};

const getRelatedArtist = async (
  id: number,
): Promise<AxiosResponse<RelatedArtistApiResponse>> => {
  const response = await axios.get<RelatedArtistApiResponse>(
    `${BASEURL}/api/related_artists/${id}`,
  );
  return response;
};

export { getArtist, getArtistByID, getArtistTopSongsByID, getArtistAlbumByID, getRelatedArtist };
