import axios, { AxiosResponse } from "axios";
import { BASEURL } from "@Constant/Api";
import { SearchResponse, TracksResponse } from "@app-types/PopulerSongs";

const getPopulerSongs = async (): Promise<AxiosResponse<TracksResponse>> => {
  const response = await axios.get<TracksResponse>(`${BASEURL}/api/top`);
  return response;
};

const getSongsByCategory = async (
  categoryID: number,
): Promise<AxiosResponse<TracksResponse>> => {
  const response = await axios.get<TracksResponse>(
    `${BASEURL}/api/song_by_category/${categoryID}`,
  );
  return response;
};

const getSongsByGenra = async (
  genra: string,
): Promise<AxiosResponse<SearchResponse>> => {
  const response = await axios.get<SearchResponse>(
    `${BASEURL}/api/search_by_genra/${genra}`,
  );
  return response;
};

export { getPopulerSongs, getSongsByCategory, getSongsByGenra };
