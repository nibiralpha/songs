import axios, { AxiosResponse } from "axios";
import { BASEURL } from "@Constant/Api";
import { PlaylistResponse } from "@app-types/Playlist";

const getPlaylistTracksByID = async (
  id: number,
): Promise<AxiosResponse<PlaylistResponse>> => {
  const response = await axios.get<PlaylistResponse>(
    `${BASEURL}/api/playlist/${id}`,
  );
  return response;
};

export { getPlaylistTracksByID };
