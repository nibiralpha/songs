import axios, { AxiosResponse } from "axios";
import { BASEURL } from "@Constant/Api";
import { TracksResponse } from "@app-types/PopulerSongs";

const getPopulerSongs = async (): Promise<AxiosResponse<TracksResponse>> => {
  const response = await axios.get<TracksResponse>(`${BASEURL}/api/top`);
  return response;
};

const getSongsByCategory = async (
  categoryID: number,
): Promise<AxiosResponse<TracksResponse>> => {
  const response = await axios.get<TracksResponse>(`${BASEURL}/api/song_by_category/${categoryID}`);
  return response;
};

export { getPopulerSongs, getSongsByCategory };
