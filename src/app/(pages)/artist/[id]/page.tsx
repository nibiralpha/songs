"use client";
import React, { useEffect } from "react";
import styles from "./Artist.module.css";

import { useParams } from "next/navigation";

export default function Artist() {
  // const params = useParams();
  // const id = Number(params.id);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    // getInitData();
  }, []);

  return (
    <div>
      <div className={styles.artist}>
        <div className={styles.artist_bg_img}>
          <img
            src={
              "https://cdn-images.dzcdn.net/images/artist/bd8d9a2f60cb74f7e751c0e40e5ea630/1000x1000-000000-80-0-0.jpg"
            }
          />
        </div>
        <div className={styles.artist_img}>
          <img
            src={
              "https://cdn-images.dzcdn.net/images/artist/bd8d9a2f60cb74f7e751c0e40e5ea630/500x500-000000-80-0-0.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
}
