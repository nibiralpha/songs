"use client";

import Link from "next/link";
import styles from "./Sidebar.module.css";

export default function SidebarComponent() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>Logo</h2>

      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/library">Library</Link>
          </li>

          <li>
            <Link href="/playlist">Playlist</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
