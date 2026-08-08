import axios, { AxiosResponse } from "axios";
import { BASEURL } from "@Constant/Api";
import { AlbumDetailsResponse } from "@app-types/Album";

const getAlbum = async (id: number): Promise<AxiosResponse<AlbumDetailsResponse>> => {
  const response = await axios.get<AlbumDetailsResponse>(`${BASEURL}/api/album/${id}`);
  return response;
};

export { getAlbum };
