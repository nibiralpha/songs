import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/Store";

const useArtist = () => {
  const artist = useSelector((state: RootState) => state.artist.artist);
  const artistDetails = useSelector((state: RootState) => state.artist.artistDetails);
  const artistSongs = useSelector((state: RootState) => state.artist.artistSongs);
  const artistAlbums = useSelector((state: RootState) => state.artist.artistAlbum);
  const relatedArtist = useSelector((state: RootState) => state.artist.relatedArtist);

  return {
    artist,
    artistDetails,
    artistSongs,
    artistAlbums,
    relatedArtist
  };
};

export default useArtist;
