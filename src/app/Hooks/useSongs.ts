import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/Store";

const useSongs = () => {
  const populerSongs = useSelector((state: RootState) => state.songs);
  const popSongs = useSelector((state: RootState) => state.songs);

  return {
    populerSongs,
    popSongs,
  };
};

export default useSongs;
