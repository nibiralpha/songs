"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function NavigationLoader() {
  const pathname = usePathname();

  const loaderRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef(false);
  const intervalRef = useRef<number | null>(null);
  const finishTimerRef = useRef<number | null>(null);

  const setProgress = (value: number) => {
    if (loaderRef.current) {
      loaderRef.current.style.width = `${value}%`;
    }
  };

  useEffect(() => {
    const handleNavigationStart = () => {
      if (loadingRef.current) {
        return;
      }

      loadingRef.current = true;

      setProgress(0);

      requestAnimationFrame(() => {
        setProgress(10);
      });

      intervalRef.current = window.setInterval(() => {
        const currentWidth = parseFloat(loaderRef.current?.style.width || "10");

        if (currentWidth >= 90) {
          return;
        }

        let increment = 2;

        if (currentWidth < 30) {
          increment = 8;
        } else if (currentWidth < 60) {
          increment = 5;
        } else if (currentWidth < 80) {
          increment = 3;
        }

        setProgress(Math.min(currentWidth + increment, 90));
      }, 200);
    };

    window.addEventListener("navigation-start", handleNavigationStart);

    return () => {
      window.removeEventListener("navigation-start", handleNavigationStart);
    };
  }, []);

  useEffect(() => {
    if (!loadingRef.current) {
      return;
    }

    setProgress(100);

    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    finishTimerRef.current = window.setTimeout(() => {
      loadingRef.current = false;

      if (loaderRef.current) {
        loaderRef.current.style.width = "0%";
      }
    }, 250);

    return () => {
      if (finishTimerRef.current !== null) {
        window.clearTimeout(finishTimerRef.current);
      }
    };
  }, [pathname]);

  return <div ref={loaderRef} className="navigation-loader" />;
}
