"use client";

import MusicBoxComponent from "@Components/MusicBox/MusicBoxComponent";
import styles from "./page.module.css";
import NewTracksComponent from "@/src/app/Components/NewTracksComponent/NewTracksComponent";
import ArtistComponent from "@/src/app/Components/ArtistComponent/ArtistComponent";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@redux/Store";
import useSongs from "@Hooks/useSongs";
import { useEffect } from "react";
import {
  fetchPopulerSongs,
  fetchSongsByCategory,
  fetchSongsByGenra,
} from "@Services/Home";
import { fetchArtist } from "@Services/Artist";
import useArtist from "@Hooks/useArtist";
import { fetchPlaylistByID } from "@Services/Playlists";
import usePlaylist from "@Hooks/usePlaylist";
import PlaylistComponent from "./Components/MusicBox/PlaylistComponent";
import { PlaylistID } from "@Constant/PlaylistID";

export default function HomePage() {
  const dispatch = useDispatch<AppDispatch>();

  const { populerSongs, popSongs, classicalSongs, tracks } = useSongs();
  const { playlists1 } = usePlaylist();
  const { artist } = useArtist();

  // const getInitData = () => {
  //   const populerSongsList = populerSongs;
  // };

  // getInitData();

  const fetchData = () => {
    dispatch(fetchPopulerSongs());
    dispatch(fetchSongsByCategory("Pop"));
    dispatch(fetchSongsByCategory("Classical"));
    dispatch(fetchArtist());
    dispatch(fetchSongsByGenra("Rock"));

    // playlist
    dispatch(fetchPlaylistByID(PlaylistID.Fresh_pop));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* <HeaderComponent /> */}
      <div className="">
        <div className={styles.sections}>
          <MusicBoxComponent
            title={"Trending Songs"}
            data={populerSongs.list}
            slidesPerView={4}
            spaceBetween={12}
          />
        </div>

        <div className={styles.sections}>
          <PlaylistComponent
            title={playlists1?.data?.title}
            data={playlists1}
            slidesPerView={4}
            spaceBetween={12}
          />
        </div>

        <div className={styles.sections}>
          <MusicBoxComponent
            title={"Pop Songs"}
            data={popSongs.list}
            slidesPerView={4}
            spaceBetween={12}
          />
        </div>

        <div className={styles.sections}>
          <NewTracksComponent
            title={"Random Tracks"}
            data={tracks.list}
            slidesPerView={4}
            spaceBetween={12}
          />
        </div>

        <div className={styles.sections}>
          <MusicBoxComponent
            title={"Classical Music"}
            data={classicalSongs.list}
            slidesPerView={4}
            spaceBetween={12}
          />
        </div>

        <div className={styles.sections}>
          <ArtistComponent
            title={"Populer Artist"}
            data={artist.artist.list}
            slidesPerView={4}
            spaceBetween={12}
          />
        </div>
      </div>
    </>
  );
}
