import { useState, useEffect } from "react";

export function useScrollCustom() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(20);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollPosition(scrollY);
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const scrollableArea = documentHeight - windowHeight;
      if (scrollableArea > 0) {
        const scrollPercent = (scrollY / scrollableArea) * 100;
        setScrollPercentage(scrollPercent);
      } else {
        setScrollPercentage(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return { scrollPosition, scrollPercentage };
}



export function useScrollToTop(position) {
    const [topOfPage, setTopOfPage] = useState(true);

  const handleScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (position > 120) {
      setTopOfPage(true);
    } else {
      setTopOfPage(false);
    }
  }, [position]);
  return {topOfPage, handleScroll};
}
