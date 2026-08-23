"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Menu.module.css";
import { FiMenu, FiX } from "react-icons/fi";

export default function MenuComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className={styles.bar}>
      <div className={styles.menu_bar}>
        <div className={styles.center}>
          <div className={styles.site_logo}>
            <img
              className={styles.logo_mobile}
              src="/logo.png"
              alt="Logo"
            />
          </div>
        </div>

        <div className={styles.left_side}>
          <div
            className={styles.menu_icon}
            onClick={() => setIsMenuOpen(true)}
          >
            <FiMenu size={25} />
          </div>
        </div>
      </div>

      {/* Overlay + Side Menu */}
      <div
        className={`${styles.overlay} ${
          isMenuOpen ? styles.overlay_open : ""
        }`}
      >
        <div
          ref={menuRef}
          className={`${styles.side_menu} ${
            isMenuOpen ? styles.side_menu_open : ""
          }`}
        >
          <div className={styles.menu_header}>
            <span>Menu</span>

            <button
              className={styles.close_button}
              onClick={() => setIsMenuOpen(false)}
            >
              <FiX size={25} />
            </button>
          </div>

          <nav className={styles.menu_items}>
            <div className={styles.menu}>Home</div>
          </nav>
        </div>
      </div>
    </div>
  );
}