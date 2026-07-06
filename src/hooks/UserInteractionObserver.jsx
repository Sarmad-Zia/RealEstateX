import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); // Animate only once
          }
        });
      },
      { threshold: 0.15 } // Triggers when 15% of the element is visible
    );

    observer.observe(currentElement);

    // Clean up the observer if the component unmounts early
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return elementRef;
}