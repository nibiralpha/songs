"use client";
import React, { useEffect } from "react";
import styles from "./Artist.module.css";

import { useParams } from "next/navigation";
import ArtistBannerComponent from "@/src/app/Components/Banner/ArtistBanner/ArtistBannerComponent";
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
import ArtistTracksComponent from "@/src/app/Components/Tracks/ArtistTracks/ArtistTracksComponent";
import AlbumComponent from "@/src/app/Components/MusicBox/AlbumComponent";
import useArtist from "@/src/app/Hooks/useArtist";
import ArtistComponent from "@/src/app/Components/ArtistComponent/ArtistComponent";

export default function Artist() {
  const dispatch = useDispatch<AppDispatch>();

  const params = useParams();
  const id = Number(params.id);

  const { artistDetails, artistSongs, artistAlbums, relatedArtist } =
    useArtist();

  const fetchData = () => {
    dispatch(fetchArtistByID(id));
    dispatch(fetchArtistTracks(id));
    dispatch(fetchArtistAlbums(id));
    dispatch(fetchRelatedArtist(id));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="content">
      <div className={styles.first_sections}>
        <ArtistBannerComponent
          data={artistDetails.data}
          loading={artistDetails.loading}
        />
      </div>
      <div className={styles.sections}>
        <ArtistTracksComponent
          title={"Tracks"}
          data={artistSongs.data}
          loading={artistSongs.loading}
          showDefault={10}
          slidesPerView={4}
          spaceBetween={12}
        />
      </div>
      <div className={styles.sections}>
        <AlbumComponent
          title={"Album"}
          data={artistAlbums.data}
          showDefault={artistAlbums.data.length}
          slidesPerView={4}
          spaceBetween={12}
          loading={artistAlbums.loading}
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
          loading={relatedArtist.loading}
          // showDefault={5}
          slidesPerView={4}
          spaceBetween={12}
        />
      </div>
    </div>
  );
}
