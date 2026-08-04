"use client";
import React, { useEffect } from "react";
import styles from "./Artist.module.css";

import { useParams } from "next/navigation";
import ArtistBannerComponent from "@/src/app/Components/ArtistBannerComponent/ArtistBannerComponent";

export default function Artist() {
  // const params = useParams();
  // const id = Number(params.id);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    // getInitData();
  }, []);

  return (
    <div className="content">
      <ArtistBannerComponent />
      {/* <div className={styles.artist}>
        <div className={styles.artist_img}>
          <img
          className={styles.main_img}
            src={
              "https://cdn-images.dzcdn.net/images/artist/bd8d9a2f60cb74f7e751c0e40e5ea630/500x500-000000-80-0-0.jpg"
            }
          />
        </div>
      </div> */}
    </div>
  );
}
