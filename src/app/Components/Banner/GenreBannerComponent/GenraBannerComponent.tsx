"use client";
import React, { useEffect } from "react";
import styles from "../Css/Banner.module.css";
import Button from "@/src/app/Components/ButtonComponent/ButtonComponent";
// import { Play } from "lucide-react";
import { FaPlay } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { GenreInterface } from "@app-types/Genre";
import { GenraOrginalAndAppName } from "@Constant/Genra";
import { GenraBannerSkeletonComponent } from "./GenraBannerSkeletonComponent.tsx";

interface Props {
  data: GenreInterface;
  loading: boolean;
}

export default function GenraBannerComponent({
  loading,
  data,
}: Readonly<Props>) {
  if (loading) {
    return <GenraBannerSkeletonComponent />;
  }

  const genreId = data?.id;

  const genreData =
    genreId !== undefined && genreId in GenraOrginalAndAppName
      ? GenraOrginalAndAppName[genreId as keyof typeof GenraOrginalAndAppName]
      : undefined;

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
            <div className={styles.artist_playlist_name}>{genreData?.name}</div>
            {/* <div className={styles.description}>{data?.description}</div> */}
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
