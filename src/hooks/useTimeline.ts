import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { segments } from "../mock";
import { ANIMATION } from "../constants";

export const useTimeline = () => {
  const [activeSegment, setActiveSegment] = useState(0);

  const currentSegment = segments[activeSegment];

  const handleSegmentChange = (segmentIndex: number) => {
    if (segmentIndex >= 0 && segmentIndex < segments.length) {
      setActiveSegment(segmentIndex);

      gsap.fromTo(
        ".event-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: parseFloat(ANIMATION.DURATION.SLOW),
          stagger: 0.1,
        }
      );
    }
  };

  const handlePrevSegment = () => {
    const newIndex =
      activeSegment > 0 ? activeSegment - 1 : segments.length - 1;
    handleSegmentChange(newIndex);
  };

  const handleNextSegment = () => {
    const newIndex =
      activeSegment < segments.length - 1 ? activeSegment + 1 : 0;
    handleSegmentChange(newIndex);
  };

  useEffect(() => {
    gsap.fromTo(
      ".timeline-container",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: ANIMATION.EASING.EASE_OUT }
    );
  }, []);

  return {
    activeSegment,
    currentSegment,
    totalSegments: segments.length,
    handleSegmentChange,
    handlePrevSegment,
    handleNextSegment,
  };
};
