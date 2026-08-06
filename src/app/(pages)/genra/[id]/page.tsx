"use client";
import React, { useEffect } from "react";
import styles from "./Playlist.module.css";

import { useParams } from "next/navigation";
import usePlaylist from "@/src/app/Hooks/usePlaylist";
import useGenra from "@Hooks/useGenra";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@redux/Store";

import { fetchGenraByID } from "@/src/app/Services/Genra";
import GenraBannerComponent from "@/src/app/Components/ArtistBannerComponent/GenraBannerComponent";
import { fetchSongsByCategory } from "@/src/app/Services/Home";
import { getGenreNameByValue } from "@/src/app/Helper/Functions";
import { GenreValue } from "@Constant/Genra";

export default function GenraPage() {
  const dispatch = useDispatch<AppDispatch>();

  const params = useParams();
  const id = Number(params.id) as GenreValue;
  const genraName = getGenreNameByValue(id) || "Pop";

  // const { list, data, loading } = usePlaylist(id);
  const { genra } = useGenra();

  const fetchData = () => {
    // const targetPlaylistIDs = [id];
    // dispatch(fetchPlaylistByID(genraName));
    dispatch(fetchGenraByID(id));
    dispatch(fetchSongsByCategory(genraName));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="content">
      <div className={styles.first_sections}>
        <GenraBannerComponent data={genra.data} loading={genra.loading} />
      </div>
      {/* <div className={styles.sections}>
        <PlaylistTrackComponent
          title={"Tracks"}
          data={list}
          showDefault={list.length}
          slidesPerView={4}
          spaceBetween={12}
        />
      </div> */}
    </div>
  );
}
