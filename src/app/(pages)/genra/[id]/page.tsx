"use client";
import React, { useEffect } from "react";
import styles from "./Playlist.module.css";

import { useParams } from "next/navigation";
import useGenra from "@Hooks/useGenra";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@redux/Store";

import { fetchGenraByID } from "@/src/app/Services/Genra";
import GenraBannerComponent from "@/src/app/Components/ArtistBannerComponent/GenraBannerComponent";
import {
  fetchPopulerSongs,
  fetchSongsByCategory,
} from "@/src/app/Services/Home";
import { getGenreNameByID } from "@/src/app/Helper/Functions";
import { Genres, GenreValue } from "@Constant/Genra";
import useSongs from "@/src/app/Hooks/useSongs";
import { MusicStateInterface } from "@/src/app/Types/MusicState";
import SongsTrackComponent from "@/src/app/Components/NewTracksComponent/SongsTrackComponent";

export default function GenraPage() {
  const dispatch = useDispatch<AppDispatch>();

  const params = useParams();
  const id = Number(params.id) as GenreValue;
  const genraOrginalName = getGenreNameByID(id) || "Pop";

  let songsList: MusicStateInterface = {
    list: [],
    loading: true,
  };

  const { genra } = useGenra();
  const { populerSongs, classicalSongs, electronics } = useSongs();

  if (genraOrginalName === "Pop") {
    songsList = populerSongs;
  }
  if (genraOrginalName === "Electronic") {
    songsList = electronics;
  }
  if (genraOrginalName === "Classical") {
    songsList = classicalSongs;
  }

  const fetchData = () => {
    dispatch(fetchGenraByID(id));
    if (id == Genres.Pop) {
      dispatch(fetchPopulerSongs());
    }
    dispatch(fetchSongsByCategory(genraOrginalName));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="content">
      <div className={styles.first_sections}>
        <GenraBannerComponent data={genra.data} loading={genra.loading} />
      </div>

      <div className={styles.sections}>
        <SongsTrackComponent
          title={"Tracks"}
          data={songsList.list}
          loading={genra.loading}
          // loading={songsList.loading}
          showDefault={songsList?.list.length}
          slidesPerView={4}
          spaceBetween={12}
        />
      </div>
    </div>
  );
}
