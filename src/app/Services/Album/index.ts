// import { startLoading } from "@redux/celebritySlice";
import { Dispatch } from "@reduxjs/toolkit";
import { setAlbum, setLoading } from "@/src/redux/AlbumSlice";
import { getAlbum } from "@Api/Album";

const fetchAbumDetail = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));

      const albumRes = await getAlbum(id);
      const albumData = albumRes?.data;
      dispatch(setAlbum(albumData));

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

export { fetchAbumDetail };
