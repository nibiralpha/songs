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
  const navigate = useNavigate();

  const changePageToPlaylist = (id: number) => {
    navigate(`/playlist/${id}`);
  };

  const changePageToArtist = (id: number) => {
    navigate(`/artist/${id}`);
  };

  const changePageToAlbum = (id: number) => {
    navigate(`/album/${id}`);
  };

  return (
    <>
      {data.loading ? (
        <div></div>
      ) : (
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
      )}

      <div className={styles.desktop_table}>
        <table className={styles.music_table}>
          <thead>
            <tr className={styles.table_row}>
              {/* Assigned column-specific width classes to the th tags */}
              <th className={`${styles.table_head} ${styles.col_img}`}>
                <div className={styles.title}>TITLE</div>
              </th>
              <th className={`${styles.table_head} ${styles.col_title}`}>
                {/* <div className={styles.title}>TITLE</div> */}
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
            {data?.loading
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
              : data?.list?.slice(0, showDefault).map((track) => {
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
                        <span
                          onClick={() => changePageToAlbum(track?.album?.id)}
                        >
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
      </div>

      {/* MOBILE */}

      <div className={styles.mobile_table}>
        <div className={styles.mobile_list}>
          {data?.list?.slice(0, showDefault).map((track) => {
            return (
              <div className={styles.mobile_main} key={track.id}>
                <div className={styles.mobile_img_area}>
                  <div className={styles.mobile_img}>
                    <img
                      className={styles.song_img}
                      src={
                        track.album.cover_small !== null
                          ? track.album.cover_small
                          : "/no-img.png"
                      }
                      alt={track.album.cover_small}
                    />
                  </div>
                </div>
                <div className={styles.mobile_content_area}>
                  <div
                    onClick={() => changePageToAlbum(track?.album?.id)}
                    className={styles.mobile_title}
                  >
                    {track?.title}
                  </div>
                  <div
                    onClick={() => changePageToArtist(track?.artist?.id)}
                    className={styles.mobile_artist}
                  >
                    {track?.artist?.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
