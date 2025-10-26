import { useRef, useEffect, useState } from "react";
import { SwiperClass } from "swiper/react";

export const useEventsSlider = (segmentId: number) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (
      swiper?.params?.navigation &&
      typeof swiper.params.navigation !== "boolean"
    ) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  useEffect(() => {
    setIsVisible(false);

    const timer = setTimeout(() => {
      if (swiper) {
        swiper.slideTo(0, 0);
      }
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [segmentId, swiper]);

  return {
    prevRef,
    nextRef,
    setSwiper,
    isVisible,
  };
};
