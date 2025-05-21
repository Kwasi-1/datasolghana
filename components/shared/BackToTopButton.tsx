"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const start = window.scrollY;
    const duration = 800; // Duration in ms
    const startTime = performance.now();

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeOutCubic(progress);

      window.scrollTo(0, start * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <button
      type="button"
      title="Back to top"
      onClick={scrollToTop}
      className={`${
        isVisible ? "fixed" : "hidden"
      } hidden md:block bottom-6 right-6 bg-[#225EA6] text-white hover:text-white p-4 rounded-full shadow-xl hover:bg-[#307bd6] transition z-50`}
    >
      <Icon icon="iconoir:fast-arrow-up" className="text-xl font-thin" />
    </button>
  );
}

export default BackToTopButton;
