"use client";

import React from "react";
import styles from "./NewTracks.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { CiHeart } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import { SearchTrack } from "@app-types/PopulerSongs";
import { formatTrackDuration } from "@Helper/Functions";
import { PlaylistStateInterface } from "@app-types/PlaylistState";
import { useRouter } from "next/navigation";
import { useNavigate } from "@Hooks/useNavigate";

interface Props {
  title: string;
  // data: SearchTrack[];
  data: PlaylistStateInterface;
  slidesPerView: number;
  spaceBetween: number;
  showDefault: number;
  showViewAll?: boolean;
}

export default function NewTracksComponent({
  title,
  data,
  slidesPerView,
  spaceBetween,
  showDefault,
  showViewAll,
}: Readonly<Props>) {
  const router = useRouter();
  const navigate = useNavigate();

  const changePageToPlaylist = (id: number) => {
    navigate(`/playlist/${id}`);
  };
  return (
    <>
      <div className={styles.heading}>
        <p
          onClick={() => changePageToPlaylist(data.data.id)}
          className={styles.section_name}
        >
          {title}
        </p>
        {showViewAll && (
          <p
            onClick={() => changePageToPlaylist(data?.data?.id)}
            className={styles.view_all}
          >
            View all
          </p>
        )}
      </div>
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
          {data?.list?.slice(0, showDefault).map((track) => {
            return (
              <tr key={track.id}>
                <td className={`${styles.track_details_img}`}>
                  <img
                    className={styles.song_img}
                    src={
                      track.album.cover_small !== null
                        ? track.album.cover_small
                        : "./no-img.png"
                    }
                    alt={track.album.cover_small}
                  />
                </td>

                <td className={`${styles.track_details} ${styles.title_track}`}>
                  {track.title}
                </td>
                <td className={styles.track_details}>{track?.artist?.name}</td>
                <td className={styles.track_details}>{track?.album?.title}</td>
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
