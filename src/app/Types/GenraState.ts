import { GenreInterface } from "./Genre";

export interface GenraStateInterface {
  genra: GenreTypeInterface; 
}

export interface GenreTypeInterface {
  data: GenreInterface;
  loading: boolean;
  // error: boolean;
  // errorResponse: object;
}
