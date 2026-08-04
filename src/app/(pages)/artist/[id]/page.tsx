"use client";
import React, { useEffect } from "react";
import styles from "./Artist.module.css";

import { useParams } from "next/navigation";
import ArtistBannerComponent from "@/src/app/Components/ArtistBannerComponent/ArtistBannerComponent";
import NewTracksComponent from "@/src/app/Components/NewTracksComponent/NewTracksComponent";
import usePlaylist from "@/src/app/Hooks/usePlaylist";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@redux/Store";
import {
  fetchPopulerSongs,
  fetchSongsByCategory,
  fetchSongsByGenra,
} from "@/src/app/Services/Home";
import { PlaylistID } from "@/src/app/Constant/PlaylistID";
import { fetchPlaylistByID } from "@/src/app/Services/Playlists";
import { fetchArtist } from "@/src/app/Services/Artist";

export default function Artist() {
  const dispatch = useDispatch<AppDispatch>();

  // const params = useParams();
  // const id = Number(params.id);

  const newAlternative = usePlaylist(PlaylistID.new_alternative);

  console.log(newAlternative);

  const fetchData = () => {
    const targetPlaylistIDs = [PlaylistID.new_alternative];

    dispatch(fetchPlaylistByID(targetPlaylistIDs));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="content">
      <div className={styles.sections}>
        <ArtistBannerComponent />
      </div>
      <div className={styles.sections}>
        <NewTracksComponent
          title={"Tracks"}
          data={newAlternative}
          showDefault={5}
          slidesPerView={4}
          spaceBetween={12}
        />
      </div>
    </div>
  );
}
