import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for creating horizontal scroll effect using GSAP ScrollTrigger
 * @param {Object} options - Configuration options
 * @param {boolean} options.enabled - Whether the horizontal scroll is enabled (default: true)
 * @param {number} options.gap - Gap between items in pixels (default: 24)
 * @param {boolean} options.snap - Whether to snap to items (default: false)
 * @param {number} options.itemsCount - Number of items to scroll through
 * @returns {Object} - Returns sectionRef and containerRef to be attached to elements
 */
export const useHorizontalScroll = ({
  enabled = true,
  gap = 24,
  snap = false,
  itemsCount = 1,
} = {}) => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const section = sectionRef.current;
    const scrollContainer = containerRef.current;
    
    if (!section || !scrollContainer) return;

    const items = Array.from(scrollContainer.children);
    if (items.length === 0) return;

    // Calculate total scroll distance
    const firstItem = items[0];
    const itemWidth = firstItem.offsetWidth + gap;
    const totalScrollDistance = itemWidth * (itemsCount - 1);

    // Create GSAP horizontal scroll animation
    const scrollTrigger = gsap.to(scrollContainer, {
      x: () => -(totalScrollDistance),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${totalScrollDistance}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        ...(snap && {
          snap: {
            snapTo: 1 / (itemsCount - 1),
            duration: 0.3,
            ease: 'power1.inOut',
          },
        }),
      },
    });

    // Cleanup function
    return () => {
      if (scrollTrigger.scrollTrigger) {
        scrollTrigger.scrollTrigger.kill();
      }
      scrollTrigger.kill();
    };
  }, [enabled, gap, snap, itemsCount]);

  return { sectionRef, containerRef };
};
