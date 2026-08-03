"use client";

import React from "react";
import styles from "./MusicBox.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FaHeart, FaPlay } from "react-icons/fa";
import { TrackData } from "@app-types/PopulerSongs";
interface Props {
  title: string;
  data: TrackData[];
  slidesPerView: number;
  spaceBetween: number;
  showDefault: number;
}

export default function MusicBoxComponent({
  title,
  data,
  slidesPerView,
  spaceBetween,
  showDefault,
}: Readonly<Props>) {
  return (
    <>
      {/* <HeaderComponent /> */}
      <p className={styles.section_name}>{title}</p>
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
                    box.album?.cover_big !== null
                      ? box.album?.cover_big
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
                <div className={styles.sub_title}>{box.artist?.name}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
