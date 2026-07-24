"use client";

import React from "react";
import styles from "./NewTracks.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { CiHeart } from "react-icons/ci";

interface Props {
  title: string;
  data: any[]; // Changed from [] to any[] to avoid strict type errors
  slidesPerView: number;
  spaceBetween: number;
}

export default function ArtistComponent({
  title,
  data,
  slidesPerView,
  spaceBetween,
}: Readonly<Props>) {
  return (
    <>
      <p className={styles.section_name}>{title}</p>
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
          <tr>
            <td className={`${styles.track_details_img}`}>
              <img className={styles.song_img} src={"/table.jpg"} alt="Cover" />
            </td>
            <td className={`${styles.track_details} ${styles.title_track}`}>No more sorrw</td>
            <td className={styles.track_details}>Linkin Park</td>
            <td className={styles.track_details}>Hyber theory</td>
            <td className={styles.track_details}>4:30</td>
            <td className={styles.track_details}>
              <CiHeart className={styles.heart} size={20}/>
            </td>
          </tr>
          <tr>
            <td className={`${styles.track_details_img}`}>
              <img className={styles.song_img} src={"/table.jpg"} alt="Cover" />
            </td>
            <td className={`${styles.track_details} ${styles.title_track}`}>No more sorrw</td>
            <td className={styles.track_details}>Linkin Park</td>
            <td className={styles.track_details}>Hyber theory</td>
            <td className={styles.track_details}>4:30</td>
            <td className={styles.track_details}>
              <CiHeart className={styles.heart} size={20}/>
            </td>
          </tr>
          <tr>
            <td className={`${styles.track_details_img}`}>
              <img className={styles.song_img} src={"/table.jpg"} alt="Cover" />
            </td>
            <td className={`${styles.track_details} ${styles.title_track}`}>No more sorrw</td>
            <td className={styles.track_details}>Linkin Park</td>
            <td className={styles.track_details}>Hyber theory</td>
            <td className={styles.track_details}>4:30</td>
            <td className={styles.track_details}>
              <CiHeart className={styles.heart} size={20}/>
            </td>
          </tr>
          <tr>
            <td className={`${styles.track_details_img}`}>
              <img className={styles.song_img} src={"/table.jpg"} alt="Cover" />
            </td>
            <td className={`${styles.track_details} ${styles.title_track}`}>No more sorrw</td>
            <td className={styles.track_details}>Linkin Park</td>
            <td className={styles.track_details}>Hyber theory</td>
            <td className={styles.track_details}>4:30</td>
            <td className={styles.track_details}>
              <CiHeart className={styles.heart} size={20}/>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
