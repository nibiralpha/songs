"use client";

import React from "react";
import styles from "../Css/Banner.module.css";
import Button from "@/src/app/Components/ButtonComponent/ButtonComponent";
import { FaPlay } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { ArtistDetails } from "@app-types/Artist";
import ContentLoader from "react-content-loader";
import { ArtistBannerSkeletonComponent } from "./ArtistBannerSkeletonComponent";

interface Props {
  data: ArtistDetails | null;
  loading: boolean;
}

export default function ArtistBannerComponent({
  loading,
  data,
}: Readonly<Props>) {
  
  if (loading) {
    return <ArtistBannerSkeletonComponent />
  }

  return (
    <div className={styles.artist_component}>
      <div className={styles.artist}>
        <div className={styles.artish_img_area}>
          <div className={styles.artist_img}>
            <img
              className={styles.main_img}
              src={data?.picture_medium ? data.picture_medium : "/no-img.png"}
              alt={data?.name ?? "Artist"}
            />
          </div>
        </div>

        <div className={styles.artist_content}>
          <div className={styles.artist_detail}>
            <div className={styles.artist_playlist_name}>{data?.name}</div>

            <div className={styles.fans}>
              {data?.nb_fan?.toLocaleString() ?? "0"} Fans
            </div>
          </div>

          <div className={styles.button_area}>
            <div className={styles.first_button}>
              <Button text="Play" icon={true} iconName={FaPlay} />
            </div>

            <div>
              <Button text="Shuffle" icon={true} iconName={FaShuffle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
