"use client";

import React from "react";
import styles from "../Css/Tracks.module.css";

import "swiper/css";
import "swiper/css/navigation";

import { CiHeart } from "react-icons/ci";
import { formatTrackDuration } from "@Helper/Functions";
import { PlaylistTrack } from "@app-types/Playlist";
import { ListSkeletonComponent } from "@Components/Tracks/ListSkeletonComponent/ListSkelatonComponent";
import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  loading: boolean;
  // data: SearchTrack[];
  data: PlaylistTrack[];
  slidesPerView: number;
  spaceBetween: number;
  showDefault: number;
}

export default function PlaylistTrackComponent({
  title,
  data,
  loading,
  slidesPerView,
  spaceBetween,
  showDefault,
}: Readonly<Props>) {

  return (
    <>
      <div className={styles.heading}>
        <p className={styles.section_name}>{title}</p>
      </div>

      <div className={styles.desktop_table}>
        <table className={styles.music_table}>
          <thead>
            <tr className={styles.table_row}>
              <th className={`${styles.table_head} ${styles.col_img}`}>
                <div className={styles.title}>TITLE</div>
              </th>
              <th className={`${styles.table_head} ${styles.col_title}`}></th>
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
            {loading
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
                        <Image
                          className={styles.song_img}
                          src={
                            track.album.cover_small !== null
                              ? track.album.cover_small
                              : "/no-img.png"
                          }
                          alt="Album cover"
                          width={45}
                          height={45}
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
                        <Link href={`/artist/${track?.artist?.id}`}>
                          <span>{track?.artist?.name}</span>
                        </Link>
                      </td>
                      <td
                        className={`${styles.track_details} ${styles.mouse_hover}`}
                      >
                        <span>
                          <Link href={`/album/${track?.album?.id}`}>
                            {track?.album?.title}
                          </Link>
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
      {loading ? (
        <ListSkeletonComponent count={5} />
      ) : (
        <div className={styles.mobile_table}>
          <div className={styles.mobile_list}>
            {data?.slice(0, showDefault).map((track) => {
              return (
                <div className={styles.mobile_main} key={track.id}>
                  <div className={styles.mobile_img_area}>
                    <div className={styles.mobile_img}>
                      <Image
                        className={styles.song_img}
                        src={
                          track.album.cover_small !== null
                            ? track.album.cover_small
                            : "/no-img.png"
                        }
                        alt="Album cover"
                        width={45}
                        height={45}
                      />
                    </div>
                  </div>
                  <div className={styles.mobile_content_area}>
                    <div className={styles.mobile_title}>
                      <Link href={`/album/${track?.album?.id}`}>
                        {track?.title}
                      </Link>
                    </div>
                    <div className={styles.mobile_artist}>
                      <Link href={`/artist/${track?.artist?.id}`}>
                        {track?.artist?.name}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
