import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GenraStateInterface } from "@app-types/GenraState";
import { GenreInterface } from "@app-types/Genre";

const initialState: GenraStateInterface = {
  genra: {
    data: {} as GenreInterface,
    loading: true,
    // error: false,
    // errorResponse: {},
  },
};

export const GenraSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {
    setGenra: (state, action: PayloadAction<GenreInterface>) => {
      return {
        ...state,
        genra: { ...state.genra, data: action.payload },
      };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        genra: { ...state.genra, loading: action.payload },
      };
    },
  },
});

export const { setGenra, setLoading } = GenraSlice.actions;
export default GenraSlice.reducer;
