import axios, { AxiosResponse } from "axios";
import { BASEURL } from "@Constant/Api";
import { ArtistDetailResponse, ArtistResponse, DeezerTrackResponse, RelatedArtistApiResponse, RelatedArtistResponse } from "@app-types/Artist";
import { AlbumResponse, ArtistAlbumsResponse } from "@app-types/Album";

const getAlbums = async (): Promise<AxiosResponse<AlbumResponse>> => {
  const response = await axios.get<AlbumResponse>(`${BASEURL}/api/artist`);
  return response;
};

// const getArtistByID = async (
//   id: number,
// ): Promise<AxiosResponse<ArtistDetailResponse>> => {
//   const response = await axios.get<ArtistDetailResponse>(
//     `${BASEURL}/api/artist_detail/${id}`,
//   );
//   return response;
// };

export { getAlbums };
