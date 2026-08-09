"use client";

import { useEffect, useState } from "react";

export default function NavigationLoader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleNavigationStart = () => {
      setLoading(true);
      
      window.setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    window.addEventListener(
      "navigation-start",
      handleNavigationStart
    );

    return () => {
      window.removeEventListener(
        "navigation-start",
        handleNavigationStart
      );
    };
  }, []);

  if (!loading) {
    return null;
  }

  return <div className="navigation-loader" />;
}