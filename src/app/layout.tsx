"use client";

import "./globals.css";
import Sidebar from "@Components/Layout/SidebarComponent/SidebarComponent";
import Header from "@Components/Layout/HeaderComponent/HeaderComponent";
import StoreProvider from "@redux/StoreProvider";
import { useEffect, useState } from "react";
import axios from "axios";
import { initializeSpotifyToken } from "@Api/Token";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const setupAuth = async () => {
      try {
        const res = await axios.get<{ access_token: string }>(
          "https://music-app-vz8r.onrender.com/spotify/token",
        );
        const token = res.data.access_token;

        initializeSpotifyToken(async () => token);

        setIsReady(true);
      } catch (error) {
        console.error("Failed to initialize Spotify token:", error);
      }
    };

    setupAuth();
  }, []);

  if (!isReady)
    return (
      <html lang="en">
        <body>
          <div>Loading Application...</div>
        </body>
      </html>
    );

  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <div className="app">
            <Sidebar />

            <div className="main">
              <div className="header_area">
                <Header />
              </div>

              <div className="content">{children}</div>

              {/* <MusicPlayer /> */}
            </div>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
