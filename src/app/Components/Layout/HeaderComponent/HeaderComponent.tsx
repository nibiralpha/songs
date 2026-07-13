"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { Music, LibraryBig } from "lucide-react";
import SearchComponent from "@Components/SearchComponent/SearchComponent";

export default function HeaderComponent() {
  return (
    <div className={styles.header}>
      {/* Header 1 */}
      <SearchComponent />
    </div>
  );
}
