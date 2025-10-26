import { useState, useEffect } from "react";

const easeOut = (t: number): number => {
  return 1 - Math.pow(1 - t, 3);
};

export const useYearAnimation = (startYear: number, endYear: number) => {
  const [displayStartYear, setDisplayStartYear] = useState(startYear);
  const [displayEndYear, setDisplayEndYear] = useState(endYear);

  useEffect(() => {
    if (startYear === displayStartYear && endYear === displayEndYear) {
      return;
    }

    const startDiff = startYear - displayStartYear;
    const endDiff = endYear - displayEndYear;

    const duration = 800;
    const startTime = Date.now();
    const startValueStart = displayStartYear;
    const startValueEnd = displayEndYear;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeOut(progress);

      const currentStart = startValueStart + startDiff * easeProgress;
      const currentEnd = startValueEnd + endDiff * easeProgress;

      setDisplayStartYear(Math.round(currentStart));
      setDisplayEndYear(Math.round(currentEnd));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [startYear, endYear, displayStartYear, displayEndYear]);

  return { displayStartYear, displayEndYear };
};
