import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/Store";

const usePlaylist = () => {
  const playlists1 = useSelector(
    (state: RootState) => state.playlist.playlist1,
  );
  return {
    playlists1,
  };
};

export default usePlaylist;
