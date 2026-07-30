"use client";

import React from "react";
import styles from "./MusicBox.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { FaHeart, FaPlay } from "react-icons/fa";
import { PlaylistData } from "@app-types/Playlist";
import { PlaylistStateInterface } from "../../Types/PlaylistState";
interface Props {
  title: string;
  data: PlaylistStateInterface;
  slidesPerView: number;
  spaceBetween: number;
}

export default function PlaylistComponent({
  title,
  data,
  slidesPerView,
  spaceBetween,
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
        {data?.list?.map((track, i) => (
          <SwiperSlide key={i}>
            <div className={styles.music_box}>
              <div className={styles.img_container}>
                <img
                  src={track.album?.cover_medium}
                  className={styles.album_img}
                  alt={track.title}
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
                <div className={styles.title}>{track.title}</div>
                <div className={styles.sub_title}>{track.artist?.name}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
