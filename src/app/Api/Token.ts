import axios, { AxiosResponse } from "axios";
import { BASEURL } from "@Constant/Api";

export const spotifyApi = axios.create({
  baseURL: "https://spotify.com",
});

interface TokenResponseData {
  access_token: string;
  token_type: string;
  expires_in: number;
}

const getToken = async (): Promise<AxiosResponse<TokenResponseData>> => {
  const response = await axios.get<TokenResponseData>(
    `${BASEURL}/spotify/spotify-token`,
  );
  return response;
};

let tokenProvider: () => Promise<string>;

export const initializeSpotifyToken = (fetchTokenFn: () => Promise<string>) => {
  tokenProvider = fetchTokenFn;
};

spotifyApi.interceptors.request.use(async (config) => {
  if (tokenProvider) {
    const token = await tokenProvider();
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { getToken };
