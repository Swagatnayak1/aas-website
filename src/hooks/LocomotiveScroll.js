"use client";

import { useEffect, useRef } from "react";

export const useLocomotiveScroll = (options = {}) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let locomotiveScroll = null;
    
    // Only import and initialize Locomotive Scroll on the client side
    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.08, // Smoothness factor (0–1)
        multiplier: 1, // Speed multiplier
        direction: "vertical", // Change to 'horizontal' if needed
        reloadOnContextChange: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
        ...options,
      });
    };

    initLocomotiveScroll();

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, [options]);

  return scrollRef;
};
