"use client";

import React, { useState, useEffect } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(percentage * end));

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration]);

  return (
    <div className="flex flex-col items-center">
      <span className="font-bold text-4xl md:text-5xl text-kworld-primary bg-gradient-to-r from-kworld-primary to-kworld-accent bg-clip-text text-transparent">
        {prefix}
        {count}
        {suffix}
      </span>
      <div className="h-1 w-12 bg-gradient-to-r from-kworld-primary to-kworld-accent rounded-full mt-2"></div>
    </div>
  );
};

export default Counter;
