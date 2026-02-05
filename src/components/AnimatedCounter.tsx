import { useEffect, useState } from "react";
import { useIntersectionObserver } from "./useIntersectionObserver";

type AnimatedCounterProps = {
  end: number;
  duration?: number;
};

export default function AnimatedCounter({
  end,
  duration = 1000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersectionObserver<HTMLSpanElement>({
    threshold: 0.3,
  });

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | undefined;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(end * percentage));
      if (percentage < 1) requestAnimationFrame(animateCount);
    };

    requestAnimationFrame(animateCount);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}</span>;
}
