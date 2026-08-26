import { type ReactNode, useEffect, useRef, useState } from 'react';

type SectionEntranceProps = {
  children: ReactNode;
};

function SectionEntrance({ children }: SectionEntranceProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );

    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.12,
      },
    );

    function handleReducedMotion(event: MediaQueryListEvent) {
      if (event.matches) {
        setIsVisible(true);
        observer.disconnect();
      }
    }

    observer.observe(container);
    reducedMotion.addEventListener('change', handleReducedMotion);

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener('change', handleReducedMotion);
    };
  }, []);

  return (
    <div
      className={`section-entrance${isVisible ? ' is-visible' : ''}`}
      ref={containerRef}
    >
      {children}
    </div>
  );
}

export default SectionEntrance;
