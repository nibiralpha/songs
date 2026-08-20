"use client";

import "./PlayerComponent.module.css";
import AudioPlayer, {
  ActiveUI,
  InterfaceGridTemplateArea,
  PlayerPlacement,
  PlayListPlacement,
  ProgressUI,
  VolumeSliderPlacement,
} from "react-modern-audio-player";
import { useState } from "react";
// import { playList } from "./playList";
import Editor from "./Editor";

const playList = [
  {
    name: "track",
    writer: "artist",
    img: "/logo.png",
    src: "/a.mp3",
    id: 1,
  },
  {
    name: "track 2",
    writer: "artist",
    img: "/logo.png",
    src: "/a2.mp3",
    id: 2,
  },
];

const initialState = {
  volume: 0.2,
  curPlayId: 1,
};

export default function PlayerComponent() {
    // error during set to waveform will fix it later
  const [progressType, setProgressType] = useState<ProgressUI>("bar");
  const [playerPlacement, setPlayerPlacement] =
    useState<PlayerPlacement>("bottom-left");
  const [interfacePlacement, setInterfacePlacement] =
    useState<InterfaceGridTemplateArea>();
  const [playListPlacement, setPlayListPlacement] =
    useState<PlayListPlacement>("bottom");
  const [volumeSliderPlacement, setVolumeSliderPlacement] =
    useState<VolumeSliderPlacement>();
  const [theme, setTheme] = useState<"dark" | "light" | undefined>();
  const [width, setWidth] = useState("100%");
  const [activeUI, setActiveUI] = useState<ActiveUI>({ all: true });

  return (
    <div className="App">
      <h3>React Modern Audio Player</h3>

      <div className="player-container">
        <AudioPlayer
          playList={playList}
          audioInitialState={initialState}
          activeUI={{
            ...activeUI,
            progress: progressType,
          }}
          placement={{
            player: playerPlacement,
            interface: {
              templateArea: interfacePlacement,
            },
            playList: playListPlacement,
            volumeSlider: volumeSliderPlacement,
          }}
          rootContainerProps={{
            style: { width },
          }}
          colorScheme={theme}
        />
      </div>

      <Editor
        setPlayerPlacement={setPlayerPlacement}
        setProgressType={setProgressType}
        setInterfacePlacement={setInterfacePlacement}
        setPlayListPlacement={setPlayListPlacement}
        setVolumeSliderPlacement={setVolumeSliderPlacement}
        setTheme={setTheme}
        setActiveUI={setActiveUI}
        setWidth={setWidth}
      />
    </div>
  );
}
