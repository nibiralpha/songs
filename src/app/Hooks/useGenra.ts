import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/Store";

const useGenra = () => {
  const genra = useSelector((state: RootState) => state.genra.genra);
  return {
    genra,
  };
};

export default useGenra;
