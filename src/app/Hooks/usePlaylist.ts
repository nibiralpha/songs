import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/Store";

const usePlaylist = () => {
  const Fresh_pop = useSelector(
    (state: RootState) => state.playlist.Fresh_pop,
  );
  return {
    Fresh_pop,
  };
};

export default usePlaylist;
