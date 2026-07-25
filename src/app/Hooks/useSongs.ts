import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/Store";

const useSongs = () => {
   const populerSongs = useSelector((state: RootState) => state.populerSongs);

  return {
    populerSongs,
  };
};

export default useSongs;
