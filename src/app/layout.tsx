import "./globals.css";
import Sidebar from "@Components/Layout/SidebarComponent/SidebarComponent";
import Header from "@Components/Layout/HeaderComponent/HeaderComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
}
