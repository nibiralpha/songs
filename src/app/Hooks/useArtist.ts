import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/Store";

const useArtist = () => {
  const artist = useSelector((state: RootState) => state.artist);

  return {
    artist,
  };
};

export default useArtist;
