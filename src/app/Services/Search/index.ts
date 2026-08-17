// import { startLoading } from "@redux/celebritySlice";
import { Dispatch } from "@reduxjs/toolkit";
import { getSearchResults } from "@Api/Search";
import { setLoading, setSearch } from "@/src/redux/SearchSlice";

const fetchSearchResult = (search: string) => {
  return async (dispatch: Dispatch) => {
    try {
        dispatch(setLoading(true));

      const searchRes = await getSearchResults(search);
      const searchData = searchRes?.data;
        dispatch(setSearch(searchData));

        dispatch(setLoading(false));
    } catch (error: unknown) {
      console.log(error);
        dispatch(setLoading(false));
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};

export { fetchSearchResult };
