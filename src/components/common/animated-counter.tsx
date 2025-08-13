import { useState, useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter = ({ value, duration = 2000, className }: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
          const suffix = value.replace(/[0-9.]/g, '');
          
          if (isNaN(numericValue)) {
            setDisplayValue(value);
            return;
          }

          let currentValue = 0;
          const increment = numericValue / (duration / 16);
          
          const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= numericValue) {
              setDisplayValue(value);
              clearInterval(timer);
            } else {
              const formatted = Math.floor(currentValue).toString();
              setDisplayValue(formatted + suffix);
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <div ref={elementRef} className={className}>
      {displayValue}
    </div>
  );
};

export { AnimatedCounter };