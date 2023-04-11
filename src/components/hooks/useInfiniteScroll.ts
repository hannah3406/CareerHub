import React from 'react';

type useInfiniteScrollProps = {
  callback: (
    entry?: IntersectionObserverEntry,
    observer?: IntersectionObserver,
  ) => void;
  options?: IntersectionObserverInit;
};

const useInfiniteScroll = ({
  callback,
  options = { threshold: 0.5 },
}: useInfiniteScrollProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const intersectionObserverCallback = React.useCallback(
    ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if (entry.isIntersecting) {
        callback(entry, observer);
      }
    },
    [callback],
  );

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      intersectionObserverCallback,
      options,
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [intersectionObserverCallback, options]);

  return { ref };
};

export default useInfiniteScroll;
