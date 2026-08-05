import { Dispatch } from "@reduxjs/toolkit";

import { getGenraByID } from "@Api/Genra";
import { setGenra, setLoading } from "@redux/GenraSlice";

const fetchGenraByID = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));

      const genraRes = await getGenraByID(id);
      const genraData = genraRes.data;

      dispatch(setGenra(genraData));

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

export { fetchGenraByID };
