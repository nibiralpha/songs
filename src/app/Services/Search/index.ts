// import { startLoading } from "@redux/celebritySlice";
import { Dispatch } from "@reduxjs/toolkit";
import { setAlbum, setLoading } from "@/src/redux/AlbumSlice";
import { getAlbum } from "@Api/Album";
import { getSearchResults } from "../../Api/Search";

const fetchSearchResult = (search: string) => {
  return async (dispatch: Dispatch) => {
    try {
      //   dispatch(setLoading(true));

      const searchRes = await getSearchResults(search);
      const searchData = searchRes?.data;
      //   dispatch(setAlbum(albumData));

      //   dispatch(setLoading(false));
    } catch (error: unknown) {
      console.log(error);
      //   dispatch(setLoading(false));
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};

export { fetchSearchResult };
