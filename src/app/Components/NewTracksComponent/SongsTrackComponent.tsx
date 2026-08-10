"use client";

import React from "react";
import styles from "./NewTracks.module.css";

import "swiper/css";
import "swiper/css/navigation";

import { CiHeart } from "react-icons/ci";
import { TrackData } from "@app-types/PopulerSongs";
import { formatTrackDuration } from "@Helper/Functions";
import { useNavigate } from "@Hooks/useNavigate";

interface Props {
  title: string;
  data: TrackData[];
  loading: boolean;
  slidesPerView: number;
  spaceBetween: number;
  showDefault: number;
}

export default function SongsTrackComponent({
  title,
  data,
  slidesPerView,
  spaceBetween,
  showDefault,
  loading,
}: Readonly<Props>) {
  const navigate = useNavigate();

  const changePageToArtist = (id: number) => {
    navigate(`/artist/${id}`);
  };

  const changePageToAlbum = (id: number) => {
    navigate(`/album/${id}`);
  };
  return (
    <>
      <div className={styles.heading}>
        <p className={styles.section_name}>{title}</p>
        {/* <p className={styles.show_all}>Show All</p> */}
      </div>
      {/* Added styles.music_table to handle layout behavior */}
      <table className={styles.music_table}>
        <thead>
          <tr className={styles.table_row}>
            {/* Assigned column-specific width classes to the th tags */}
            <th className={`${styles.table_head} ${styles.col_img}`}></th>
            <th className={`${styles.table_head} ${styles.col_title}`}>
              <div className={styles.title}>TITLE</div>
            </th>
            <th className={`${styles.table_head} ${styles.col_artist}`}>
              <div className={styles.title}>ARTIST</div>
            </th>
            <th className={`${styles.table_head} ${styles.col_album}`}>
              <div className={styles.title}>ALBUM</div>
            </th>
            <th className={`${styles.table_head} ${styles.col_time}`}>
              <div className={styles.title}>TIME</div>
            </th>
            <th className={`${styles.table_head} ${styles.col_last}`}>
              <div className={styles.title}></div>
            </th>
          </tr>
        </thead>
        <tbody>
          {loading == true
            ? Array.from({ length: 5 }).map((_, index) => (
                <tr key={index}>
                  <td className={styles.track_details_img}>
                    <div className={styles.skeleton_img} />
                  </td>

                  <td
                    className={`${styles.track_details} ${styles.title_track}`}
                  >
                    <div className={styles.skeleton_text} />
                  </td>

                  <td className={styles.track_details}>
                    <div className={styles.skeleton_text} />
                  </td>

                  <td className={styles.track_details}>
                    <div className={styles.skeleton_text} />
                  </td>

                  <td className={styles.track_details}>
                    <div className={styles.skeleton_time} />
                  </td>

                  <td className={styles.track_details}>
                    <div className={styles.skeleton_heart} />
                  </td>
                </tr>
              ))
            : data?.slice(0, showDefault).map((track) => {
                return (
                  <tr key={track.id}>
                    <td className={`${styles.track_details_img}`}>
                      <img
                        className={styles.song_img}
                        src={
                          track.album.cover_small !== null
                            ? track.album.cover_small
                            : "/no-img.png"
                        }
                        alt={track.album.cover_small}
                      />
                    </td>

                    <td
                      className={`${styles.track_details} ${styles.title_track}`}
                    >
                      {track.title}
                    </td>
                    <td
                      className={`${styles.track_details} ${styles.mouse_hover}`}
                    >
                      <span
                        onClick={() => changePageToArtist(track?.artist?.id)}
                      >
                        {track?.artist?.name}
                      </span>
                    </td>
                    <td
                      className={`${styles.track_details} ${styles.mouse_hover}`}
                    >
                      <span onClick={() => changePageToAlbum(track?.album?.id)}>
                        {track?.album?.title}
                      </span>
                    </td>
                    <td className={styles.track_details}>
                      {formatTrackDuration(track?.duration)}
                    </td>
                    <td className={styles.track_details}>
                      <CiHeart className={styles.heart} size={20} />
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </>
  );
}
