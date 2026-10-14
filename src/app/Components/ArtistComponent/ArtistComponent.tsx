"use client";

import React from "react";
import styles from "./Artist.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { FaPlay } from "react-icons/fa";
import { Artist, RelatedArtistResponse } from "@app-types/Artist";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useNavigate } from "@Hooks/useNavigate";
import { useResponsiveSlides } from "@Hooks/useResponsiveSlides";
import Link from "next/link";
import Image from "next/image";

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

  const responsiveSlides = useResponsiveSlides();

  return (
    <>
      {/* <HeaderComponent /> */}

      {!loading && <p className={styles.section_name}>{title}</p>}

      {loading ? (
        <div className={styles.Skeleton}>
          {Array.from({ length: responsiveSlides }).map((_, index) => (
            <div key={index} className={styles.Skeleton_div}>
              <Skeleton circle height={210} />
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
                  <Link href={`/artist/${artist?.id}`}>
                    <Image
                      src={artist.picture_medium || "/no-img.png"}
                      className={styles.album_img}
                      alt={artist.name}
                      width={500}
                      height={500}
                      sizes="(max-width: 430px) 100vw, 225px"
                    />
                  </Link>
                  <div className={styles.actions}>
                    <div className={styles.action_button}>
                      <FaPlay className={styles.action_icon} size={16} />
                    </div>
                  </div>
                </div>
                <div className={styles.desc}>
                  <div className={styles.title}>
                    <Link href={`/artist/${artist?.id}`}>{artist.name}</Link>
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
