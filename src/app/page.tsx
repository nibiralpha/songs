import MusicBoxComponent from "@Components/MusicBox/MusicBoxComponent";

export default function HomePage() {
  return (
    <>
      {/* <HeaderComponent /> */}
      <div className="">
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
    </>
  );
}
