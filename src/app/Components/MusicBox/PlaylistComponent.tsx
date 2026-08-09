"use client";

import React from "react";
import styles from "./MusicBox.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { FaHeart, FaPlay } from "react-icons/fa";
import { PlaylistData } from "@app-types/Playlist";
import { PlaylistStateInterface } from "@app-types/PlaylistState";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useRouter } from "next/navigation";
import { useNavigate } from "@Hooks/useNavigate";
interface Props {
  title: string;
  data: PlaylistStateInterface;
  slidesPerView: number;
  spaceBetween: number;
  showDefault: number;
  loading?: boolean;
}

export default function PlaylistComponent({
  title,
  data,
  slidesPerView,
  spaceBetween,
  showDefault,
  loading,
}: Readonly<Props>) {
  const navigate = useNavigate();

  const changePageToPlaylist = (id: number) => {
    navigate("/playlist/" + id);
  };

  const changePageToArtist = (id: number) => {
    navigate("/artist/" + id);
  };

  return (
    <>
      {loading ? (
        <Skeleton width={200} height={20} style={{ marginBottom: "15px" }} />
      ) : (
        // <p className={styles.section_name}>{title}</p>
        <div className={styles.heading}>
          <p
            onClick={() => changePageToPlaylist(data?.data?.id)}
            className={styles.section_name}
          >
            {title}
          </p>
          <p
            onClick={() => changePageToPlaylist(data?.data?.id)}
            className={styles.view_all}
          >
            View all
          </p>
        </div>
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
          {data?.list?.slice(0, showDefault)?.map((track, i) => (
            <SwiperSlide key={i}>
              <div className={styles.music_box}>
                <div className={styles.img_container}>
                  <img
                    src={
                      track.album?.cover_medium !== null
                        ? track.album?.cover_medium
                        : "/no-img.png"
                    }
                    className={styles.album_img}
                    alt={track.title}
                    // onClick={() => changePage(data?.data?.id)}
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
                  <div
                    onClick={() => changePageToArtist(track?.artist?.id)}
                    className={styles.sub_title}
                  >
                    {track.artist?.name}
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
