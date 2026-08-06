"use client";
import React, { useEffect } from "react";
import styles from "./Playlist.module.css";

import { useParams } from "next/navigation";
import usePlaylist from "@/src/app/Hooks/usePlaylist";
import useGenra from "@Hooks/useGenra";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@redux/Store";

import { fetchPlaylistByID } from "@/src/app/Services/Playlists";
import PlaylistBannerComponent from "@/src/app/Components/ArtistBannerComponent/PlaylistBannerComponent";
import PlaylistTrackComponent from "@/src/app/Components/NewTracksComponent/PlaylistTracksComponent";
import CategoryBannerComponent from "@/src/app/Components/ArtistBannerComponent/CategoryBannerComponent";
import { fetchGenraByID } from "@/src/app/Services/Genra";
import GenraBannerComponent from "@/src/app/Components/ArtistBannerComponent/GenraBannerComponent";
import {
  fetchSongsByCategory,
  fetchSongsByGenra,
} from "@/src/app/Services/Home";
import { getGenreNameByValue } from "@/src/app/Helper/Functions";
import { GenreValue } from "@/src/app/Types/Genre";

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
    dispatch(fetchSongsByCategory(genraName))
    
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
