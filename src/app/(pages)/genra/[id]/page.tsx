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
import { getGenreNameByID } from "@/src/app/Helper/Functions";
import { GenreValue } from "@Constant/Genra";
import useSongs from "@/src/app/Hooks/useSongs";
import MusicBoxComponent from "@/src/app/Components/MusicBox/MusicBoxComponent";
import { MusicStateInterface } from "@/src/app/Types/MusicState";

export default function GenraPage() {
  const dispatch = useDispatch<AppDispatch>();

  const params = useParams();
  const id = Number(params.id) as GenreValue;
  const genraOrginalName = getGenreNameByID(id) || "Pop";

  // const { list, data, loading } = usePlaylist(id);
  let songsList: MusicStateInterface = {
    list: [],
    loading: true,
  };
  const { genra } = useGenra();
  const { populerSongs, popSongs, classicalSongs, tracks } = useSongs();

  if (genraOrginalName === "Pop") {
    songsList = popSongs;
  }
  // if (genraOrginalName === "") {
  //   const songsList =  popSongs;
  // }

  console.log(genraOrginalName);
  console.log(songsList);

  const fetchData = () => {
    // const targetPlaylistIDs = [id];
    // dispatch(fetchPlaylistByID(genraName));
    dispatch(fetchGenraByID(id));
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
      <MusicBoxComponent
        title={"Baal"}
        id={genra.data.id}
        data={songsList?.list}
        loading={populerSongs.loading}
        slidesPerView={4}
        spaceBetween={12}
        showDefault={20}
        showViewAll={true}
      />
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
