"use client";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styles from "./NewTracks.module.css";

interface Props {
  count: number;
}

export function ListSkeletonComponent({ count }: Readonly<Props>) {
  return (
    <div className={styles.mobile_table}>
      <div className={styles.mobile_list}>
        {Array.from({ length: count }).map((data, index) => {
          return (
            <div className={styles.skeleton_mobile_main} key={index}>
              <div className={styles.mobile_img_area}>
                <div className={styles.mobile_img}>
                  <Skeleton
                    height="20"
                    width="20"
                    className={styles.song_img}
                  />
                </div>
              </div>
              <div className={styles.mobile_content_area}>
                <div className={styles.mobile_title}>
                  <Skeleton height="10" width="70%" />
                </div>
                <div className={styles.mobile_artist}>
                  <Skeleton height="10" width="50%" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
