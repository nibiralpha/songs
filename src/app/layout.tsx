import "./globals.css";
import Sidebar from "@Components/SidebarComponent/SidebarComponent";

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

          <main className="content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}