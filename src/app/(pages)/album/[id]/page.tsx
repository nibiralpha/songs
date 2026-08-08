"use client";
import React, { useEffect } from "react";
import styles from "./Album.module.css";

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
import AlbumBannerComponent from "@/src/app/Components/ArtistBannerComponent/AlbumBannerComponent";
import { fetchAbumDetail } from "@/src/app/Services/Album";
import useAlbum from "@/src/app/Hooks/useAlbum";

export default function Artist() {
  const dispatch = useDispatch<AppDispatch>();

  const params = useParams();
  const id = Number(params.id);

  const { artistDetails, artistSongs, artistAlbums, relatedArtist } =
    useArtist();
  const { albums } = useAlbum();

  const fetchData = () => {
    dispatch(fetchAbumDetail(id));
    // dispatch(fetchArtistByID(id));
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
        <AlbumBannerComponent
          data={albums.data}
          loading={albums.loading}
        />
      </div>
      <div className={styles.sections}>
        <ArtistTracksComponent
          title={"Tracks"}
          data={artistSongs.data}
          showDefault={10}
          slidesPerView={4}
          spaceBetween={12}
        />
      </div>
      <div className={styles.sections}>
        <AlbumComponent
          title={"Album"}
          data={artistAlbums.data}
          showDefault={5}
          slidesPerView={4}
          spaceBetween={12}
        />
      </div>
      {/* <div className={styles.sections}>
        <AlbumComponent
          title={"Top songs"}
          data={artistAlbums.data}
          showDefault={5}
          slidesPerView={4}
          spaceBetween={12}
        />
      </div> */}
      <div className={styles.sections}>
        <ArtistComponent
          title={"Related Artist"}
          data={relatedArtist.data}
          loading={false}
          // showDefault={5}
          slidesPerView={4}
          spaceBetween={12}
        />
      </div>
    </div>
  );
}
