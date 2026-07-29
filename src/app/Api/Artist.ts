import axios, { AxiosResponse } from "axios";
import { BASEURL } from "@Constant/Api";
import { ArtistResponse } from "@app-types/Artist";

const getArtist = async (): Promise<AxiosResponse<ArtistResponse>> => {
  const response = await axios.get<ArtistResponse>(`${BASEURL}/api/artist`);
  return response;
};

export { getArtist };
