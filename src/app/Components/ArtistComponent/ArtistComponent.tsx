"use client";

import React from "react";
import styles from "./Artist.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FaHeart, FaPlay } from "react-icons/fa";

interface Props {
  title: string;
  data: [];
  slidesPerView: number;
  spaceBetween: number;
}

export default function ArtistComponent({
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
        {data.map((box, i) => (
          <SwiperSlide key={i}>
            <div className={styles.music_box}>
              <div className={styles.img_container}>
                <img
                  src={"/320x320.jpg"}
                  className={styles.album_img}
                  alt={box.title}
                />
                <div className={styles.actions}>
                  <div className={styles.action_button}>
                    <FaPlay className={styles.action_icon} size={16} />
                  </div>
                </div>
              </div>
              <div className={styles.desc}>
                <div className={styles.title}>{box.title}</div>
               </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
