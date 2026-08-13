"use client";
import React, { useEffect } from "react";
import styles from "../Css/Banner.module.css";
import Button from "@/src/app/Components/ButtonComponent/ButtonComponent";
// import { Play } from "lucide-react";
import { FaPlay } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { AlbumDetailsResponse } from "@app-types/Album";
import ContentLoader from "react-content-loader";
import { AlbumtBannerSkeletonComponent } from "./AlbumBannerSkeletonComponent";
interface Props {
  data: AlbumDetailsResponse;
  loading: boolean;
}

export default function AlbumBannerComponent({
  loading,
  data,
}: Readonly<Props>) {
  
  if (loading) {
    return <AlbumtBannerSkeletonComponent />;
  }

  return (
    <div className={styles.artist_component}>
      <div className={styles.artist}>
        <div className={styles.artish_img_area}>
          <div className={styles.artist_img}>
            <img
              className={styles.album_main_img}
              src={
                data?.cover_medium !== null ? data?.cover_medium : "/no-img.png"
              }
            />
          </div>
        </div>
        <div className={styles.artist_content}>
          <div className={styles.artist_detail}>
            <div className={styles.artist_playlist_name}>{data?.title}</div>
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
