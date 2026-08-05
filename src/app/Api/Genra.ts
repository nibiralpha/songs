import axios, { AxiosResponse } from "axios";
import { BASEURL } from "@Constant/Api";
import { PlaylistResponse } from "@app-types/Playlist";
import { GenreInterface } from "@app-types/Genre";

const getGenraByID = async (
  id: number,
): Promise<AxiosResponse<GenreInterface>> => {
  const response = await axios.get<GenreInterface>(
    `${BASEURL}/api/genre/${id}`,
  );
  return response;
};

export { getGenraByID };
