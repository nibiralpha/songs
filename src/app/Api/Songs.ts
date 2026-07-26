import axios, { AxiosResponse } from "axios";
import { BASEURL } from "@Constant/Api";
import { TracksResponse } from "@app-types/PopulerSongs";

const getPopulerSongs = async (): Promise<AxiosResponse<TracksResponse>> => {
  const response = await axios.get<TracksResponse>(`${BASEURL}/api/top`);
  return response;
};

export { getPopulerSongs };
