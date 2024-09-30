'use client';
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import icon_left from '@/public/icons/chevron-left.svg';
import icon_right from '@/public/icons/chevron-right.svg';
import { throttle } from '@/lib/throttle';

export default function ScrollOperation({ containerId }) {
  const [buttonVisibility, setButtonVisibility] = useState({
    showLeftButton: false,
    showRightButton: true,
  });

  useEffect(function() {
    const container = document.getElementById(containerId);
    if (!container) return;

    const handleScroll = throttle(function() {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setButtonVisibility({
        showLeftButton: scrollLeft > 0,
        showRightButton: scrollLeft < scrollWidth - clientWidth,
      });
    }, 200); // Throttle to 200ms

    const handleWheelScroll = function(event) {
      if (event.deltaY !== 0) {
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
    };

    // Add event listeners
    container.addEventListener('scroll', handleScroll);
    container.addEventListener('wheel', handleWheelScroll);

    // Initialize button visibility on load
    handleScroll();

    return function() {
      container.removeEventListener('scroll', handleScroll);
      container.removeEventListener('wheel', handleWheelScroll);
    };
  }, [containerId]);

  // Scroll left function
  function scrollLeft() {
    const container = document.getElementById(containerId);
    if (container) {
      container.scrollBy({
        left: -955,
        behavior: 'smooth'
      });

      // Update button visibility after scrolling left
      handleScroll();
    }
  }

  // Scroll right function
  function scrollRight() {
    const container = document.getElementById(containerId);
    if (container) {
      container.scrollBy({
        left: 955,
        behavior: 'smooth'
      });

      // Update button visibility after scrolling right
      handleScroll();
    }
  }

  return (
    <>
      {buttonVisibility.showLeftButton && (
        <button
          onClick={scrollLeft}
          className="absolute-v-center left-4 px-4 h-full bg-slate-100 bg-opacity-0 hover:bg-opacity-25 opacity-30 hover:opacity-100"
        >
          <Image
            src={icon_left}
            className="rounded-full hover:bg-slate-50 hover:bg-opacity-25"
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
            className="rounded-full hover:bg-slate-50 hover:bg-opacity-25"
            height={48}
            width={48}
            alt="scroll right icon"
          />
        </button>
      )}
    </>
  );
}