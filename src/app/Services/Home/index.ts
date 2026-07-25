// import { startLoading } from "@redux/celebritySlice";
import { Dispatch } from "@reduxjs/toolkit";
import { getPopulerSongs } from "@Api/Songs";

const fetchPopulerSongs = () => {
  return async (dispatch: Dispatch) => {
    try {
    //   dispatch(startLoading(true));

      const songsRes = await getPopulerSongs();
      const songsData = songsRes.data;

    //   dispatch(setCelebrityWorkData(data));
    //   dispatch(startLoading(false));

      // dispatch(startLoading(false));
    } catch (error: unknown) {
      console.log(error);
    //   dispatch(startLoading(true));

      // dispatch(startLoading(false));
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};

export { fetchPopulerSongs };
