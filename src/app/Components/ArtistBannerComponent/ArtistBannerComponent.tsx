"use client";
import React, { useEffect } from "react";
import styles from "./ArtistBanner.module.css";
import Button from "@Components/Button/ButtonComponent";
// import { Play } from "lucide-react";
import { FaPlay } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";


export default function ArtistBannerComponent() {
  return (
    <div className={styles.artist_component}>
      <div className={styles.artist}>
        <div className={styles.artish_img_area}>
          <div className={styles.artist_img}>
            <img
              className={styles.main_img}
              src={
                "https://cdn-images.dzcdn.net/images/artist/bd8d9a2f60cb74f7e751c0e40e5ea630/500x500-000000-80-0-0.jpg"
              }
            />
          </div>
        </div>
        <div className={styles.artist_content}>
          <div className={styles.artist_detail}>
            <div className={styles.artist_playlist_name}>New Alternative</div>
            <div className={styles.fans}>1,878,028 fans</div>
          </div>
          <div className={styles.button_area}>
            <div className={styles.first_button}>
              <Button text="Play" icon={true} iconName={FaPlay}/>
            </div>
            <div>
              <Button text="Shuffle" icon={true} iconName={FaShuffle}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
