"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { Music, LibraryBig } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import SearchComponent from "@Components/SearchComponent/SearchComponent";
import { AppDispatch, RootState } from "@/src/redux/Store";
import { fetchSearchResult } from "@/src/app/Services/Search";

export default function HeaderComponent() {
  const dispatch = useDispatch<AppDispatch>();

    const searchResult = useSelector(
    (state: RootState) => state.search.data || {},
  );

  const onSearch = (searchedData: string) => {
    dispatch(fetchSearchResult(searchedData));
  };

  return (
    <div className={styles.header}>
      <SearchComponent onChange={onSearch} />
    </div>
  );
}
