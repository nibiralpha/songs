import axios, { AxiosResponse } from "axios";
import { BASEURL } from "@Constant/Api";
import { DeezerSearchResponse } from "@app-types/Search";

const getSearchResults = async (q: string): Promise<AxiosResponse<DeezerSearchResponse>> => {
  const response = await axios.get<DeezerSearchResponse>(`${BASEURL}/api/search?q=${q}`);
  return response;
};

export { getSearchResults };
