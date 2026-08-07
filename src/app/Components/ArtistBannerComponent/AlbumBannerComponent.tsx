"use client";
import React, { useEffect } from "react";
import styles from "./ArtistBanner.module.css";
import Button from "@Components/Button/ButtonComponent";
// import { Play } from "lucide-react";
import { FaPlay } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { ArtistDetails } from "@app-types/Artist";
import { ArtistDetailStateInterface } from "@app-types/ArtistState";

interface Props {
  data: ArtistDetails | null;
  loading: boolean;
}
export default function AlbumBannerComponent({
  loading,
  data,
}: Readonly<Props>) {
  return (
    <div className={styles.artist_component}>
      <div className={styles.artist}>
        <div className={styles.artish_img_area}>
          <div className={styles.artist_img}>
            <img className={styles.album_main_img} src={data?.picture_medium} />
          </div>
        </div>
        <div className={styles.artist_content}>
          <div className={styles.artist_detail}>
            <div className={styles.artist_playlist_name}>{data?.name}</div>
            <div className={styles.fans}>{data?.nb_fan?.toLocaleString() ?? "0"} Fans</div>
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
