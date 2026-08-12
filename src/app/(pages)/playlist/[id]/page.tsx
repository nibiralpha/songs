"use client";
import React, { useEffect } from "react";
import styles from "./Playlist.module.css";

import { useParams } from "next/navigation";
import usePlaylist from "@/src/app/Hooks/usePlaylist";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@redux/Store";

import { fetchPlaylistByID } from "@/src/app/Services/Playlists";
import PlaylistBannerComponent from "@/src/app/Components/Banner/PlaylistBannerComponent/PlaylistBannerComponent";
import PlaylistTrackComponent from "@/src/app/Components/Tracks/PlaylistTracksComponent/PlaylistTracksComponent";

export default function Playlist() {
  const dispatch = useDispatch<AppDispatch>();

  const params = useParams();
  const id = Number(params.id);

  const { list, data, loading } = usePlaylist(id);

  const fetchData = () => {
    const targetPlaylistIDs = [id];
    dispatch(fetchPlaylistByID(targetPlaylistIDs));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="content">
      <div className={styles.first_sections}>
        <PlaylistBannerComponent
          data={data}
          loading={loading}
        />
      </div>
      <div className={styles.sections}>
        <PlaylistTrackComponent
          title={"Tracks"}
          loading={loading}
          data={list}
          showDefault={list.length}
          slidesPerView={4}
          spaceBetween={12}
        />
      </div>
    </div>
  );
}
