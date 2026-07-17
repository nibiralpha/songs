"use client";

import Link from "next/link";
import styles from "./Sidebar.module.css";
import { Music, LibraryBig } from "lucide-react";

export default function SidebarComponent() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>
        <img src="/logo.png" />
      </h2>

      <nav>
        <ul>
          <li>
            <div className={styles.menus}>
              <div className={styles.menu}>
                <div className={styles.icon}>
                  <Music className={styles.icon_type}/>
                </div>
                <div className={styles.name}>Music</div>
              </div>

              <div className={`${styles.menu} ${styles.active}`}>
                <div className={styles.icon}>
                  <LibraryBig className={styles.icon_type} />
                </div>
                <div className={styles.name}>Library</div>
              </div>

            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
