"use client";

import MusicBoxComponent from "@Components/MusicBox/MusicBoxComponent";
import styles from "./page.module.css";
import NewTracksComponent from "@/src/app/Components/NewTracksComponent/NewTracksComponent";
import ArtistComponent from "@/src/app/Components/ArtistComponent/ArtistComponent";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@redux/Store";
import useSongs from "@Hooks/useSongs";
import { useEffect } from "react";
import { fetchPopulerSongs, fetchTrendingSongs } from "@Services/Home";

export default function HomePage() {
  const dispatch = useDispatch<AppDispatch>();

  const { populerSongs, trendingSongs } = useSongs();

  // const getInitData = () => {
  //   const populerSongsList = populerSongs;
  // };

  // getInitData();

  const fetchData = () => {
    dispatch(fetchPopulerSongs());
    dispatch(fetchTrendingSongs());
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
            title={"Popular Songs"}
            data={populerSongs.populerSongs.list}
            slidesPerView={4}
            spaceBetween={12}
          />
        </div>
        <div className={styles.sections}>
          <MusicBoxComponent
            title={"Trending Songs"}
            data={trendingSongs.trendingSongs.list}
            slidesPerView={4}
            spaceBetween={12}
          />
        </div>

        <div className={styles.sections}>
          <NewTracksComponent
            title={"New Tracks"}
            data={[
              {
                img: "",
                title: "Good reason",
                artist: "Linkin Park",
                album: "Daughter from hell",
                time: "4:80",
              },
              {
                img: "",
                title: "Good reason",
                artist: "Linkin Park",
                album: "Daughter from hell",
                time: "4:80",
              },
              {
                img: "",
                title: "Good reason",
                artist: "Linkin Park",
                album: "Daughter from hell",
                time: "4:80",
              },
              {
                img: "",
                title: "Good reason",
                artist: "Linkin Park",
                album: "Daughter from hell",
                time: "4:80",
              },
              {
                img: "",
                title: "Good reason",
                artist: "Linkin Park",
                album: "Daughter from hell",
                time: "4:80",
              },
            ]}
            slidesPerView={4}
            spaceBetween={12}
          />
        </div>

        <div className={styles.sections}>
          <MusicBoxComponent
            title={"New Album"}
            data={[
              { title: "Linkin Park", album: "Hybirtheory" },
              { title: "Bonjovi", album: "Its my life" },
              { title: "title 3", album: "test" },
              { title: "title 4", album: "test" },
              { title: "title 5", album: "test" },
              { title: "title 6", album: "test" },
            ]}
            slidesPerView={4}
            spaceBetween={12}
          />
        </div>
        <div className={styles.sections}>
          <ArtistComponent
            title={"Populer Artist"}
            data={[
              { title: "Linkin Park", album: "Hybirtheory" },
              { title: "Bonjovi", album: "Its my life" },
              { title: "title 3", album: "test" },
              { title: "title 4", album: "test" },
              { title: "title 5", album: "test" },
              { title: "title 6", album: "test" },
            ]}
            slidesPerView={4}
            spaceBetween={12}
          />
        </div>
      </div>
    </>
  );
}
