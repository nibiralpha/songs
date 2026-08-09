"use client";

import React from "react";
import styles from "./Artist.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FaHeart, FaPlay } from "react-icons/fa";
import {
  Artist,
  ArtistDetails,
  RelatedArtistResponse,
} from "@app-types/Artist";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useRouter } from "next/navigation";
import { RelatedArtistInterface } from "@app-types/ArtistState";

interface Props {
  title: string;
  data: Artist[] | RelatedArtistResponse[];
  slidesPerView: number;
  spaceBetween: number;
  loading: boolean;
}

export default function ArtistComponent({
  title,
  data,
  slidesPerView,
  spaceBetween,
  loading,
}: Readonly<Props>) {
  const router = useRouter();

  const changePage = (id: number) => {
    router.push("/artist/" + id);
  };

  return (
    <>
      {/* <HeaderComponent /> */}
      {loading ? (
        <Skeleton width={200} height={20} style={{ marginBottom: "30px" }} />
      ) : (
        <p className={styles.section_name}>{title}</p>
      )}

      {loading ? (
        <div className={styles.Skeleton}>
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className={styles.Skeleton_div}>
              <Skeleton circle={true} height={270} />
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
          {data?.map((artist, i) => (
            <SwiperSlide key={i}>
              <div className={styles.music_box}>
                <div className={styles.img_container}>
                  <img
                    src={
                      artist.picture_medium !== null
                        ? artist.picture_medium
                        : "/no-img.png"
                    }
                    className={styles.album_img}
                    alt={artist.name}
                  />
                  <div className={styles.actions}>
                    <div className={styles.action_button}>
                      <FaPlay className={styles.action_icon} size={16} />
                    </div>
                  </div>
                </div>
                <div className={styles.desc}>
                  <div
                    onClick={() => changePage(artist.id)}
                    className={styles.title}
                  >
                    {artist.name}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
