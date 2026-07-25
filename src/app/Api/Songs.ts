import axios, { AxiosResponse } from "axios";
import { BASEURL } from "@Constant/Api";
import { TracksResponse } from "@app-types/PopulerSongs";

const getPopulerSongs = async (
  page: number = 1,
): Promise<AxiosResponse<TracksResponse>> => {
  const response = await axios.get<TracksResponse>(
    `${BASEURL}/chart`,
  );
  return response;
};

export {
  getPopulerSongs
};
