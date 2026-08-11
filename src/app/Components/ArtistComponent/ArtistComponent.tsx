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
import { useNavigate } from "@Hooks/useNavigate";
import ContentLoader from "react-content-loader";

interface Props {
  title: string;
  data: Artist[] | RelatedArtistResponse[];
  slidesPerView: number;
  spaceBetween: number;
  loading: boolean;
}

function ArtistSkeleton() {
  return (
    <div className={styles.artist_skeleton}>
      <ContentLoader
        speed={2}
        width={300}
        height={300}
        viewBox="0 0 300 300"
        backgroundColor="#2a2a2a"
        foregroundColor="#3d3d3d"
        style={{
          width: "100%",
          height: "100%",
          aspectRatio: "1 / 1",
          borderRadius: "50%",
        }}
      >
        <circle cx="150" cy="150" r="145" />
      </ContentLoader>

      <div className={styles.skeleton_title}>
        <ContentLoader
          speed={2}
          width={180}
          height={30}
          viewBox="0 0 180 30"
          backgroundColor="#2a2a2a"
          foregroundColor="#3d3d3d"
          style={{
            width: "180px",
            height: "30px",
          }}
        >
          <rect x="0" y="5" width="180" height="20" rx="4" />
        </ContentLoader>
      </div>
    </div>
  );
}

export default function ArtistComponent({
  title,
  data,
  slidesPerView,
  spaceBetween,
  loading,
}: Readonly<Props>) {
  const navigate = useNavigate();

  const changePage = (id: number) => {
    navigate("/artist/" + id);
  };

  if (loading) {
    return (
      <>
        <ContentLoader
          speed={2}
          width={200}
          height={30}
          viewBox="0 0 200 30"
          backgroundColor="#2a2a2a"
          foregroundColor="#3d3d3d"
          style={{ width: "200px", height: "30px", marginBottom: "30px" }}
        >
          <rect x="0" y="5" width="160" height="20" rx="5" />
        </ContentLoader>
        <div className={styles.Skeleton}>
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className={styles.Skeleton_div}>
              <ArtistSkeleton />
            </div>
          ))}
        </div>
      </>
    );
  }

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
    </>
  );
}
