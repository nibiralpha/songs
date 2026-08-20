"use client";

import dynamic from "next/dynamic";

const PlayerComponent = dynamic(
  () => import("./PlayerComponent"),
  {
    ssr: false,
  }
);

export default PlayerComponent;