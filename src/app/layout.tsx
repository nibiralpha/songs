import type { Metadata,Viewport } from "next";
import "./globals.css";
import Sidebar from "@Components/Layout/SidebarComponent/SidebarComponent";
import Header from "@Components/Layout/HeaderComponent/HeaderComponent";
import StoreProvider from "@redux/StoreProvider";
import NavigationLoader from "@Components/NavigationLoaderComponent/NavigationLoaderComponent";

export const metadata: Metadata = {
  title: "Music App",
  description: "A app for music lover",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <NavigationLoader />

          <div className="app">
            <Sidebar />

            <div className="main">
              <div className="header_area">
                <Header />
              </div>

              <div>{children}</div>
               {/* <MusicPlayer /> */}
            </div>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}