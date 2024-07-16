import { useState, useEffect } from "react";

interface UseInViewProps extends IntersectionObserverInit {
  once?: boolean;
}

const useInView = ({ once = true, ...options }: UseInViewProps = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry], obs) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (once) {
          obs.unobserve(entry.target);
        }
      }
    }, options);

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, options, once]);

  return { ref: setRef, inView: isIntersecting };
};

export default useInView;
