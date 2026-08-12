"use client";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styles from "./ArtistBanner.module.css";

export function PlaylistBannerSkeletonComponent() {
  return (
    <div className={styles.artist_component}>
      <div className={styles.artist}>
        <div className={styles.artish_img_area}>
          <div className={styles.artist_img}>
            <Skeleton
              className={`${styles.main_img} ${styles.skeleton_main_img}`}
            />
          </div>
        </div>
        <div className={styles.artist_content}>
          <div className={styles.artist_detail}>
            <div className={styles.artist_playlist_name}>
              <Skeleton width={"70%"} height={50} className={styles.main_img} />
            </div>
            <div className={styles.description}>
              <Skeleton
                width={"100%"}
                height={20}
                className={styles.main_img}
              />
            </div>
          </div>
          <div className={styles.button_area}>
            <div className={styles.first_button}>
              <Skeleton width={"150px"} height={40} />
            </div>
            <div>
              <Skeleton width={"150px"} height={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
