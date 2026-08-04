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

  const freshPop = usePlaylist(PlaylistID.Fresh_pop);
  const freshSoul = usePlaylist(PlaylistID.Fresh_Soul);
  const raderWeekly = usePlaylist(PlaylistID.Radar_Weekly);
  const newAlternative = usePlaylist(PlaylistID.new_alternative);

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

    const targetPlaylistIDs = [
      PlaylistID.Fresh_pop,
      PlaylistID.Fresh_Soul,
      PlaylistID.Radar_Weekly,
      PlaylistID.new_alternative,
    ];

    // playlist
    dispatch(fetchPlaylistByID(targetPlaylistIDs));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* <HeaderComponent /> */}
      <div className="content">
        <div className={styles.sections}>
          <MusicBoxComponent
            title={"Trending Songs"}
            data={populerSongs.list}
            loading={populerSongs.loading}
            slidesPerView={4}
            spaceBetween={12}
            showDefault={20}
          />
        </div>

        <div className={styles.sections}>
          <PlaylistComponent
            title={freshPop?.data?.title}
            data={freshPop}
            loading={freshPop.loading}
            slidesPerView={4}
            spaceBetween={12}
            showDefault={20}
          />
        </div>

        <div className={styles.sections}>
          <PlaylistComponent
            title={freshSoul?.data?.title}
            data={freshSoul}
            loading={freshSoul.loading}
            slidesPerView={4}
            spaceBetween={12}
            showDefault={20}
          />
        </div>
        <div className={styles.sections}>
          <PlaylistComponent
            title={raderWeekly?.data?.title}
            data={raderWeekly}
            loading={raderWeekly.loading}
            slidesPerView={4}
            spaceBetween={12}
            showDefault={20}
          />
        </div>

        <div className={styles.sections}>
          <MusicBoxComponent
            title={"Pop Songs"}
            data={popSongs.list}
            loading={populerSongs.loading}
            slidesPerView={4}
            spaceBetween={12}
            showDefault={20}
          />
        </div>

        {/* <div className={styles.sections}>
          <NewTracksComponent
            title={"Random Tracks"}
            data={tracks.list}
            slidesPerView={4}
            spaceBetween={12}
          />
        </div> */}
        <div className={styles.sections}>
          <NewTracksComponent
            title={newAlternative?.data?.title}
            data={newAlternative}
            showDefault={5}
            slidesPerView={4}
            spaceBetween={12}
          />
        </div>

        <div className={styles.sections}>
          <MusicBoxComponent
            title={"Classical Music"}
            data={classicalSongs.list}
            loading={classicalSongs.loading}
            slidesPerView={4}
            spaceBetween={12}
            showDefault={20}
          />
        </div>

        <div className={styles.sections}>
          <ArtistComponent
            title={"Populer Artist"}
            data={artist.list}
            slidesPerView={4}
            spaceBetween={12}
            loading={artist.loading}
          />
        </div>
      </div>
    </>
  );
}
