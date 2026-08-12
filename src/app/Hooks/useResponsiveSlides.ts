import { useEffect, useState } from "react";

export function useResponsiveSlides() {
  const [slides, setSlides] = useState(1);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;

      if (width < 768) {
        // Mobile
        setSlides(1);
      } else if (width < 1024) {
        // Tablet
        setSlides(3);
      } else if (width < 1440) {
        // Laptop
        setSlides(4);
      } else {
        // Desktop
        setSlides(5);
      }
    };

    updateSlides();

    window.addEventListener("resize", updateSlides);

    return () => {
      window.removeEventListener("resize", updateSlides);
    };
  }, []);

  return slides;
}