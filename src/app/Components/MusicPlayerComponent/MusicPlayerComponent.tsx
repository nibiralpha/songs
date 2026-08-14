"use client";

import React from "react";
import styles from "./MusicPlayer.module.css";
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from "react-icons/fa";

interface MusicPlayerProps {
  isPlaying?: boolean;
  title?: string;
  artist?: string;
  image?: string;
}

export default function MusicPlayer({
  isPlaying = false,
  title = "No song playing",
  artist = "Unknown artist",
  image = "/no-img.png",
}: MusicPlayerProps) {
  return (
    <div className={styles.player}>
      <div className={styles.player_inner}>
        {/* Song information */}
        <div className={styles.song_info}>
          <img
            src={image}
            alt={title}
            className={styles.song_image}
          />

          <div className={styles.song_details}>
            <div className={styles.song_title}>{title}</div>
            <div className={styles.song_artist}>{artist}</div>
          </div>
        </div>

        <div className={styles.controls}>
          <button className={styles.control_button}>
            <FaStepBackward />
          </button>

          <button className={styles.play_button}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          <button className={styles.control_button}>
            <FaStepForward />
          </button>
        </div>

        <div className={styles.volume_area}>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="70"
          />
        </div>
      </div>
    </div>
  );
}