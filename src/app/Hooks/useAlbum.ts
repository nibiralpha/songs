import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/Store";

const useAlbum = () => {
  const albums = useSelector((state: RootState) => state.album.album);

  return {
    albums,
  };
};

export default useAlbum;
