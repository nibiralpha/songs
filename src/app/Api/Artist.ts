import axios, { AxiosResponse } from "axios";
import { BASEURL } from "@Constant/Api";
import { ArtistDetailResponse, ArtistResponse } from "@app-types/Artist";

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

export { getArtist, getArtistByID };
