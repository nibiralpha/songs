"use client";

import React from "react";
import styles from "./MusicBox.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { FaHeart, FaPlay } from "react-icons/fa";
import { TrackData } from "@app-types/PopulerSongs";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ArtistAlbum } from "@app-types/Album";
interface Props {
  title: string;
  data: ArtistAlbum[];
  slidesPerView: number;
  spaceBetween: number;
  showDefault?: number;
  loading?: boolean;
}

export default function AlbumComponent({
  title,
  data,
  slidesPerView,
  spaceBetween,
  showDefault,
  loading,
}: Readonly<Props>) {
  return (
    <>
      {loading ? (
        <Skeleton width={200} height={20} style={{ marginBottom: "15px" }} />
      ) : (
        <p className={styles.section_name}>{title}</p>
      )}

      {loading ? (
        <div className={styles.Skeleton}>
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className={styles.Skeleton_div}>
              <Skeleton height={270} />
              <Skeleton count={1} />
            </div>
          ))}
        </div>
      ) : (
        <Swiper
          navigation={true}
          //   modules={[Navigation]}
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            430: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: slidesPerView,
            },
          }}
        >
          {data?.slice(0, showDefault).map((box, i) => (
            <SwiperSlide key={i}>
              <div className={styles.music_box}>
                <div className={styles.img_container}>
                  <img
                    src={
                      box?.cover_medium !== null
                        ? box.cover_medium
                        : "./no-img.png"
                    }
                    className={styles.album_img}
                    alt={box.title}
                  />
                  <div className={styles.actions}>
                    <div className={styles.action_button}>
                      <FaPlay className={styles.action_icon} size={16} />
                    </div>
                    <div className={styles.action_button}>
                      <FaHeart className={styles.action_icon} size={16} />
                    </div>
                  </div>
                </div>
                <div className={styles.desc}>
                  <div className={styles.title}>{box.title}</div>
                  <div className={styles.sub_title}>{box?.title}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
