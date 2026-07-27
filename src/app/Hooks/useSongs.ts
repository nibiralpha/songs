import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/Store";

const useSongs = () => {
  const populerSongs = useSelector((state: RootState) => state.songs);
  const trendingSongs = useSelector((state: RootState) => state.songs);

  return {
    populerSongs,
    trendingSongs,
  };
};

export default useSongs;
