import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/Store";

const usePlaylist = (playlistId: string | number) => {
  const playlist = useSelector(
    (state: RootState) => state.playlist[playlistId],
  );

  return {
    list: playlist?.list || [],
    data: playlist?.data || null,
    loading: playlist?.loading ?? true,
  };
};

export default usePlaylist;
