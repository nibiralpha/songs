"use client";

import React from "react";
import styles from "../Css/Banner.module.css";
import Button from "@Components/Button/ButtonComponent";
import { FaPlay } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { ArtistDetails } from "@app-types/Artist";
import ContentLoader from "react-content-loader";

interface Props {
  data: ArtistDetails | null;
  loading: boolean;
}

function ArtistBannerSkeleton() {
  return (
    <div className={styles.artist_component}>
      <div className={styles.artist}>
        <div className={styles.artish_img_area}>
          <ContentLoader
            speed={2}
            width="100%"
            height="100%"
            viewBox="0 0 400 400"
            backgroundColor="#2a2a2a"
            foregroundColor="#3d3d3d"
            preserveAspectRatio="xMidYMid slice"
            style={{
              width: "100%",
              height: "100%",
              aspectRatio: "1 / 1",
            }}
          >
            <rect x="0" y="0" width="400" height="400" rx="8" ry="8" />
          </ContentLoader>
        </div>

        <div className={styles.artist_content}>
          <div className={styles.artist_detail}>
            <ContentLoader
              speed={2}
              width={400}
              height={100}
              viewBox="0 0 400 100"
              backgroundColor="#2a2a2a"
              foregroundColor="#3d3d3d"
            >
              <rect x="0" y="5" width="280" height="45" rx="6" />

              <rect x="0" y="65" width="110" height="18" rx="4" />
            </ContentLoader>
          </div>

          <div className={styles.button_area}>
            <ContentLoader
              speed={2}
              width={230}
              height={50}
              viewBox="0 0 230 50"
              backgroundColor="#2a2a2a"
              foregroundColor="#3d3d3d"
            >
              <rect x="0" y="5" width="105" height="40" rx="6" />
              <rect x="115" y="5" width="105" height="40" rx="6" />
            </ContentLoader>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ArtistBannerComponent({
  loading,
  data,
}: Readonly<Props>) {
  
  if (loading) {
    return <ArtistBannerSkeleton />;
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
