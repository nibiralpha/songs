"use client";
import React, { useEffect } from "react";
import styles from "./Playlist.module.css";

import { useParams } from "next/navigation";
import ArtistBannerComponent from "@/src/app/Components/ArtistBannerComponent/ArtistBannerComponent";
import usePlaylist from "@/src/app/Hooks/usePlaylist";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@redux/Store";

import { PlaylistID } from "@/src/app/Constant/PlaylistID";
import { fetchPlaylistByID } from "@/src/app/Services/Playlists";
import {
  fetchArtistAlbums,
  fetchArtistByID,
  fetchArtistTracks,
  fetchRelatedArtist,
} from "@/src/app/Services/Artist";
import ArtistTracksComponent from "@/src/app/Components/NewTracksComponent/ArtistTracksComponent";
import AlbumComponent from "@/src/app/Components/MusicBox/AlbumComponent";
import useArtist from "@/src/app/Hooks/useArtist";
import ArtistComponent from "@/src/app/Components/ArtistComponent/ArtistComponent";
import PlaylistBannerComponent from "@/src/app/Components/ArtistBannerComponent/PlaylistBannerComponent";
import PlaylistTrackComponent from "@/src/app/Components/NewTracksComponent/PlaylistTracksComponent";

export default function Playlist() {
  const dispatch = useDispatch<AppDispatch>();

  const params = useParams();
  const id = Number(params.id);

  const { list, data, loading } = usePlaylist(id);

  const fetchData = () => {
    const targetPlaylistIDs = [1282495565];
    dispatch(fetchPlaylistByID(targetPlaylistIDs));
    // dispatch(fetchArtistTracks(id));
    // dispatch(fetchArtistAlbums(id));
    // dispatch(fetchRelatedArtist(id));
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
          // list={list}
        />
      </div>
      <div className={styles.sections}>
        <PlaylistTrackComponent
          title={"Tracks"}
          data={list}
          showDefault={list.length}
          slidesPerView={4}
          spaceBetween={12}
        />
      </div>
      {/* <div className={styles.sections}>
        <AlbumComponent
          title={"Album"}
          data={artistAlbums.data}
          showDefault={5}
          slidesPerView={4}
          spaceBetween={12}
        />
      </div> */}
      {/* <div className={styles.sections}>
        <AlbumComponent
          title={"Top songs"}
          data={artistAlbums.data}
          showDefault={5}
          slidesPerView={4}
          spaceBetween={12}
        />
      </div> */}
      {/* <div className={styles.sections}>
        <ArtistComponent
          title={"Related Artist"}
          data={relatedArtist.data}
          loading={false}
          // showDefault={5}
          slidesPerView={4}
          spaceBetween={12}
        />
      </div> */}
    </div>
  );
}
