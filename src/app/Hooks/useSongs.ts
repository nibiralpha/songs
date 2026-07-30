import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/Store";

const useSongs = () => {
  const populerSongs = useSelector((state: RootState) => state.songs.populerSongs);
  const popSongs = useSelector((state: RootState) => state.songs.popSongs);
  const classicalSongs = useSelector((state: RootState) => state.songs.classicalSongs);
  const tracks = useSelector((state: RootState) => state.songs.tracks);

  return {
    populerSongs,
    popSongs,
    classicalSongs,
    tracks
  };
};

export default useSongs;
