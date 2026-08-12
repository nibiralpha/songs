"use client";
import React, { useEffect } from "react";
import styles from "./ArtistBanner.module.css";
import Button from "@Components/Button/ButtonComponent";
// import { Play } from "lucide-react";
import { FaPlay } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { PlaylistDescription, PlaylistTrack } from "@app-types/Playlist";

import { PlaylistBannerSkeletonComponent } from "./PlaylistBannerSkeletonComponent";
interface Props {
  data: PlaylistDescription | null;
  loading: boolean;
  list?: PlaylistTrack;
}

export default function PlaylistBannerComponent({
  loading,
  data,
}: Readonly<Props>) {
  if (loading) {
    return <PlaylistBannerSkeletonComponent />;
  }

  return (
    <div className={styles.artist_component}>
      <div className={styles.artist}>
        <div className={styles.artish_img_area}>
          <div className={styles.artist_img}>
            <img
              className={styles.main_img}
              src={
                data?.picture_medium !== null
                  ? data?.picture_medium
                  : "/no-img.png"
              }
            />
          </div>
        </div>
        <div className={styles.artist_content}>
          <div className={styles.artist_detail}>
            <div className={styles.artist_playlist_name}>{data?.title}</div>
            <div className={styles.description}>{data?.description}</div>
            <div className={styles.fans}>
              {data?.fans?.toLocaleString() ?? "0"} Fans
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
