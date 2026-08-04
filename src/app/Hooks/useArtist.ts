import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/Store";

const useArtist = () => {
  const artist = useSelector((state: RootState) => state.artist.artist);
  const artistDetails = useSelector((state: RootState) => state.artist.artistDetails);

  return {
    artist,
    artistDetails
  };
};

export default useArtist;
