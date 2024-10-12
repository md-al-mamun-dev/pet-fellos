'use client';
import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import icon_left from '@/public/icons/chevron-left.svg';
import icon_right from '@/public/icons/chevron-right.svg';
import { throttle } from '@/lib/throttle';

export default function ScrollOperation({ containerId }) {
  const [buttonVisibility, setButtonVisibility] = useState({
    showLeftButton: false,
    showRightButton: true,
  });
  const containerRef = useRef(null);

  function handleScroll() {
    const container = containerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setButtonVisibility({
      showLeftButton: scrollLeft > 0,
      showRightButton: scrollLeft < scrollWidth - clientWidth,
    });
  }

  function handleWheelScroll(event) {
    const container = containerRef.current;
    if (!container || event.deltaY === 0) return;

    event.preventDefault();
    container.scrollLeft += event.deltaY;

    // Check if at the left or right end and scroll globally
    const { scrollLeft, scrollWidth, clientWidth } = container;
    if (scrollLeft === 0) {
      window.scrollBy({
        top: -100, // Adjust for smoother scrolling
        behavior: 'smooth'
      });
    } else if (scrollLeft >= scrollWidth - clientWidth) {
      window.scrollBy({
        top: 100, // Adjust for smoother scrolling
        behavior: 'smooth'
      });
    }

    // Update button visibility after scrolling
    handleScroll();
  }

  useEffect(function() {
    const container = document.getElementById(containerId);
    if (!container) return;

    containerRef.current = container; // Set the ref

    const throttledHandleScroll = throttle(handleScroll, 100); // Throttle to 200ms

    // Add event listeners
    container.addEventListener('scroll', throttledHandleScroll);
    container.addEventListener('wheel', handleWheelScroll);

    // Initialize button visibility based on the initial scroll position
    handleScroll();

    return function() {
      container.removeEventListener('scroll', throttledHandleScroll);
      container.removeEventListener('wheel', handleWheelScroll);
    };
  }, [containerId]);

  const scrollLeft = useCallback(function() {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: -955,
        behavior: 'smooth'
      });

      // Update button visibility after scrolling left
      handleScroll();
    }
  }, []);

  const scrollRight = useCallback(function() {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: 955,
        behavior: 'smooth'
      });

      // Update button visibility after scrolling right
      handleScroll();
    }
  }, []);

  return (
    <>
      {buttonVisibility.showLeftButton && (
        <button
          onClick={scrollLeft}
          className="absolute-v-center left-4 px-4 h-full bg-slate-100 bg-opacity-0 hover:bg-opacity-25 opacity-30 hover:opacity-100"
        >
          <Image
            src={icon_left}
            className="rounded-full hover:bg-blue-50 hover:bg-opacity-25"
            height={48}
            width={48}
            alt="scroll left icon"
          />
        </button>
      )}
      {buttonVisibility.showRightButton && (
        <button
          onClick={scrollRight}
          className="absolute-v-center right-4 h-full p-4 bg-slate-100 bg-opacity-0 hover:bg-opacity-25 opacity-30 hover:opacity-100"
        >
          <Image
            src={icon_right}
            className="rounded-full hover:bg-blue-50 hover:bg-opacity-25"
            height={48}
            width={48}
            alt="scroll right icon"
          />
        </button>
      )}
    </>
  );
}