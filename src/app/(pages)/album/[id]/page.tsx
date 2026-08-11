"use client";
import React, { useEffect } from "react";
import styles from "./Album.module.css";

import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@redux/Store";

import AlbumBannerComponent from "@/src/app/Components/ArtistBannerComponent/AlbumBannerComponent";
import { fetchAbumDetail } from "@/src/app/Services/Album";
import useAlbum from "@/src/app/Hooks/useAlbum";
import AlbumTracksComponent from "@/src/app/Components/NewTracksComponent/AlbumTracksComponent";

export default function Artist() {
  const dispatch = useDispatch<AppDispatch>();

  const params = useParams();
  const id = Number(params.id);

  const { albums } = useAlbum();

  const fetchData = () => {
    dispatch(fetchAbumDetail(id));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="content">
      <div className={styles.first_sections}>
        <AlbumBannerComponent data={albums.data} loading={albums.loading} />
      </div>
      <div className={styles.sections}>
        <AlbumTracksComponent
          title={"Tracks"}
          data={albums.data?.tracks?.data}
          loading={albums.loading}
          showDefault={10}
          slidesPerView={4}
          spaceBetween={12}
        />
      </div>
    </div>
  );
}
