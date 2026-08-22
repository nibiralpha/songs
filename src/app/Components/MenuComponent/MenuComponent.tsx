"use client";

import { usePathname, useRouter } from "next/navigation";

import styles from "./Menu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { IoIosMenu } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

type HeaderProps = Readonly<{
  // setClearFilterData?: React.Dispatch<React.SetStateAction<boolean>>;
  showMenu?: boolean;
}>;

export default function MenuComponent({
  // setClearFilterData,
  showMenu = true,
}: HeaderProps) {
  //   const dispatch = useDispatch();
  //   const pathname = usePathname();
  //   const router = useRouter();
  //   const path = pathname.split("/");

  //   const showFilter = useSelector((state: RootState) => state.filter.showFilter);
  //   const filter = useSelector((state: RootState) => state.search);
  //   const route = path[1];

  //   const showClearFilter: boolean = !Object.values(filter).every((value) => {
  //     if (typeof value === "string") return value === "";

  //     if (Array.isArray(value)) return value[0] === 0 && value[1] === 100;

  //     return true;
  //   });

  const changePage = (page: string) => {
    // router.push(`/${page}`);
  };

  //   const visibleMenu = () => {
  //     dispatch(setFilter(!showFilter));
  //   };

  //   const clearAllFilterData = () => {
  //     dispatch(clearFilter(""));
  //     router.replace(window.location.pathname);

  //     // setClearFilterData?.(true);
  //   };

  return (
    <div className={styles.bar}>
      <div className={styles.menu_bar}>
        <div className={styles.center}>
          <div className={styles.site_logo}>
            <img className={styles.logo_mobile} src="/logo.png" />
          </div>
        </div>
        <div className={styles.left_side}>
          <div className={styles.menu_icon}>
            <FiMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
