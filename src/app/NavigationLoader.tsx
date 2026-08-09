"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavigationLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleNavigationStart = () => {
      setLoading(true);
    };

    window.addEventListener("navigation-start", handleNavigationStart);

    return () => {
      window.removeEventListener(
        "navigation-start",
        handleNavigationStart
      );
    };
  }, []);

  useEffect(() => {
    if (!loading) return;

    const stopLoader = () => {
      setLoading(false);
    };

    const frame = requestAnimationFrame(stopLoader);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  if (!loading) {
    return null;
  }

  return <div className="navigation-loader" />;
}