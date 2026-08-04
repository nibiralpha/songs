"use client";
import React, { useEffect } from "react";
import styles from "./Artist.module.css";

import { useParams } from "next/navigation";
import ArtistBannerComponent from "@/src/app/Components/ArtistBannerComponent/ArtistBannerComponent";
import NewTracksComponent from "@/src/app/Components/NewTracksComponent/NewTracksComponent";
import usePlaylist from "@/src/app/Hooks/usePlaylist";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@redux/Store";
import {
  fetchPopulerSongs,
  fetchSongsByCategory,
  fetchSongsByGenra,
} from "@/src/app/Services/Home";
import { PlaylistID } from "@/src/app/Constant/PlaylistID";
import { fetchPlaylistByID } from "@/src/app/Services/Playlists";
import { fetchArtist, fetchArtistByID } from "@/src/app/Services/Artist";
import ArtistTracksComponent from "@/src/app/Components/NewTracksComponent/ArtistTracksComponent";
import AlbumComponent from "@/src/app/Components/MusicBox/AlbumComponent";
import { TrackData } from "@/src/app/Types/PopulerSongs";
import useArtist from "@/src/app/Hooks/useArtist";

export default function Artist() {
  const dispatch = useDispatch<AppDispatch>();

  const params = useParams();
  const id = Number(params.id);

  const fakeTracks: TrackData[] = [
    {
      id: 1,
      title: "Blinding Lights",
      title_short: "Blinding Lights",
      title_version: "",
      link: "https://www.deezer.com/track/1",
      duration: 200,
      rank: 985432,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview: "https://example.com/previews/blinding-lights.mp3",
      md5_image: "coverhash001",
      position: 1,
      artist: {
        id: 101,
        name: "The Weeknd",
        link: "https://www.deezer.com/artist/101",
        picture: "https://picsum.photos/600?random=1",
        picture_small: "https://picsum.photos/56?random=1",
        picture_medium: "https://picsum.photos/250?random=1",
        picture_big: "https://picsum.photos/500?random=1",
        picture_xl: "https://picsum.photos/1000?random=1",
        radio: true,
        tracklist: "https://api.deezer.com/artist/101/top",
        type: "artist",
      },
      album: {
        id: 201,
        title: "After Hours",
        cover: "https://picsum.photos/600?random=11",
        cover_small: "https://picsum.photos/56?random=11",
        cover_medium: "https://picsum.photos/250?random=11",
        cover_big: "https://picsum.photos/500?random=11",
        cover_xl: "https://picsum.photos/1000?random=11",
        md5_image: "albumhash001",
        tracklist: "https://api.deezer.com/album/201/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 2,
      title: "Levitating",
      title_short: "Levitating",
      title_version: "(feat. DaBaby)",
      link: "https://www.deezer.com/track/2",
      duration: 203,
      rank: 912341,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview: "https://example.com/previews/levitating.mp3",
      md5_image: "coverhash002",
      position: 2,
      artist: {
        id: 102,
        name: "Dua Lipa",
        link: "https://www.deezer.com/artist/102",
        picture: "https://picsum.photos/600?random=2",
        picture_small: "https://picsum.photos/56?random=2",
        picture_medium: "https://picsum.photos/250?random=2",
        picture_big: "https://picsum.photos/500?random=2",
        picture_xl: "https://picsum.photos/1000?random=2",
        radio: true,
        tracklist: "https://api.deezer.com/artist/102/top",
        type: "artist",
      },
      album: {
        id: 202,
        title: "Future Nostalgia",
        cover: "https://picsum.photos/600?random=12",
        cover_small: "https://picsum.photos/56?random=12",
        cover_medium: "https://picsum.photos/250?random=12",
        cover_big: "https://picsum.photos/500?random=12",
        cover_xl: "https://picsum.photos/1000?random=12",
        md5_image: "albumhash002",
        tracklist: "https://api.deezer.com/album/202/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 3,
      title: "As It Was",
      title_short: "As It Was",
      title_version: "",
      link: "https://www.deezer.com/track/3",
      duration: 167,
      rank: 843521,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview: "https://example.com/previews/as-it-was.mp3",
      md5_image: "coverhash003",
      position: 3,
      artist: {
        id: 103,
        name: "Harry Styles",
        link: "https://www.deezer.com/artist/103",
        picture: "https://picsum.photos/600?random=3",
        picture_small: "https://picsum.photos/56?random=3",
        picture_medium: "https://picsum.photos/250?random=3",
        picture_big: "https://picsum.photos/500?random=3",
        picture_xl: "https://picsum.photos/1000?random=3",
        radio: true,
        tracklist: "https://api.deezer.com/artist/103/top",
        type: "artist",
      },
      album: {
        id: 203,
        title: "Harry's House",
        cover: "https://picsum.photos/600?random=13",
        cover_small: "https://picsum.photos/56?random=13",
        cover_medium: "https://picsum.photos/250?random=13",
        cover_big: "https://picsum.photos/500?random=13",
        cover_xl: "https://picsum.photos/1000?random=13",
        md5_image: "albumhash003",
        tracklist: "https://api.deezer.com/album/203/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 4,
      title: "Heat Waves",
      title_short: "Heat Waves",
      title_version: "",
      link: "https://www.deezer.com/track/4",
      duration: 238,
      rank: 791245,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview: "https://example.com/previews/heat-waves.mp3",
      md5_image: "coverhash004",
      position: 4,
      artist: {
        id: 104,
        name: "Glass Animals",
        link: "https://www.deezer.com/artist/104",
        picture: "https://picsum.photos/600?random=4",
        picture_small: "https://picsum.photos/56?random=4",
        picture_medium: "https://picsum.photos/250?random=4",
        picture_big: "https://picsum.photos/500?random=4",
        picture_xl: "https://picsum.photos/1000?random=4",
        radio: true,
        tracklist: "https://api.deezer.com/artist/104/top",
        type: "artist",
      },
      album: {
        id: 204,
        title: "Dreamland",
        cover: "https://picsum.photos/600?random=14",
        cover_small: "https://picsum.photos/56?random=14",
        cover_medium: "https://picsum.photos/250?random=14",
        cover_big: "https://picsum.photos/500?random=14",
        cover_xl: "https://picsum.photos/1000?random=14",
        md5_image: "albumhash004",
        tracklist: "https://api.deezer.com/album/204/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 5,
      title: "Stay",
      title_short: "Stay",
      title_version: "",
      link: "https://www.deezer.com/track/5",
      duration: 141,
      rank: 932111,
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 2,
      preview: "https://example.com/previews/stay.mp3",
      md5_image: "coverhash005",
      position: 5,
      artist: {
        id: 105,
        name: "The Kid LAROI",
        link: "https://www.deezer.com/artist/105",
        picture: "https://picsum.photos/600?random=5",
        picture_small: "https://picsum.photos/56?random=5",
        picture_medium: "https://picsum.photos/250?random=5",
        picture_big: "https://picsum.photos/500?random=5",
        picture_xl: "https://picsum.photos/1000?random=5",
        radio: true,
        tracklist: "https://api.deezer.com/artist/105/top",
        type: "artist",
      },
      album: {
        id: 205,
        title: "F*CK LOVE 3",
        cover: "https://picsum.photos/600?random=15",
        cover_small: "https://picsum.photos/56?random=15",
        cover_medium: "https://picsum.photos/250?random=15",
        cover_big: "https://picsum.photos/500?random=15",
        cover_xl: "https://picsum.photos/1000?random=15",
        md5_image: "albumhash005",
        tracklist: "https://api.deezer.com/album/205/tracks",
        type: "album",
      },
      type: "track",
    },
  ];

  const newAlternative = usePlaylist(PlaylistID.new_alternative);
  const { artistDetails } = useArtist();

  const fetchData = () => {
    const targetPlaylistIDs = [PlaylistID.new_alternative];

    // for testing purpose
    dispatch(fetchPlaylistByID(targetPlaylistIDs));

    dispatch(fetchArtistByID(id));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="content">
      <div className={styles.first_sections}>
        <ArtistBannerComponent data={artistDetails.data} loading={artistDetails.loading}/>
      </div>
      <div className={styles.sections}>
        <ArtistTracksComponent
          title={"Tracks"}
          data={newAlternative}
          showDefault={10}
          slidesPerView={4}
          spaceBetween={12}
        />
      </div>
      <div className={styles.sections}>
        <AlbumComponent
          title={"Album"}
          data={fakeTracks}
          showDefault={5}
          slidesPerView={4}
          spaceBetween={12}
        />
      </div>
      <div className={styles.sections}>
        <AlbumComponent
          title={"Top songs"}
          data={fakeTracks}
          showDefault={5}
          slidesPerView={4}
          spaceBetween={12}
        />
      </div>
      <div className={styles.sections}>
        <AlbumComponent
          title={"Related Artist"}
          data={fakeTracks}
          showDefault={5}
          slidesPerView={4}
          spaceBetween={12}
        />
      </div>
    </div>
  );
}
