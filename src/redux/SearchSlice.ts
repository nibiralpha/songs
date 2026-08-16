import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlbumDetailsResponse } from "@app-types/Album";
import { AlbumInterface } from "@app-types/AlbumState";
import { SearchInterface } from "@app-types/SearchState";
import { DeezerSearchResponse } from "@app-types/Search";

const initialState: SearchInterface = {
  data: {
    data: {} as DeezerSearchResponse,
    loading: true,
  },
};

export const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<DeezerSearchResponse>) => {
      return {
        ...state,
        data: { ...state.data, data: action.payload },
      };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        data: { ...state.data, loading: action.payload },
      };
    },
  },
});

export const { setSearch, setLoading } = SearchSlice.actions;
export default SearchSlice.reducer;
