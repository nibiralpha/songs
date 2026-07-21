import MusicBoxComponent from "@Components/MusicBox/MusicBoxComponent";
import styles from "./page.module.css";
import ArtistComponent from "@Components/Artist/ArtistComponent";

export default function HomePage() {
  return (
    <>
      {/* <HeaderComponent /> */}
      <div className="">
        <div className={styles.sections}>
          <MusicBoxComponent
            title={"Uploads for purchase"}
            data={[
              { title: "Linkin Park", album: "Hybirtheory" },
              { title: "Bonjovi", album: "Its my life" },
              { title: "title 3", album: "test" },
              { title: "title 4", album: "test" },
              { title: "title 5", album: "test" },
              { title: "title 6", album: "test" },
            ]}
            slidesPerView={4}
            spaceBetween={12}
          />
        </div>
        <div className={styles.sections}>
          <MusicBoxComponent
            title={"The Hits"}
            data={[
              { title: "Linkin Park", album: "Hybirtheory" },
              { title: "Bonjovi", album: "Its my life" },
              { title: "title 3", album: "test" },
              { title: "title 4", album: "test" },
              { title: "title 5", album: "test" },
              { title: "title 6", album: "test" },
            ]}
            slidesPerView={4}
            spaceBetween={12}
          />
        </div>
        <div className={styles.sections}>
          <ArtistComponent
            title={"Populer artist"}
            data={[
              { title: "Linkin Park", album: "Hybirtheory" },
              { title: "Bonjovi", album: "Its my life" },
              { title: "title 3", album: "test" },
              { title: "title 4", album: "test" },
              { title: "title 5", album: "test" },
              { title: "title 6", album: "test" },
            ]}
            slidesPerView={4}
            spaceBetween={12}
          />
        </div>
      </div>
    </>
  );
}
