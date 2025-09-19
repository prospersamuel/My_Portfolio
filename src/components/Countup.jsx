import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'motion/react';

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  addPlus = true,
  onStart,
  onEnd
}) {
  const ref = useRef(null);
  const plusRef = useRef(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness
  });

  const isInView = useInView(ref, { once: true, margin: '0px' });

  const getDecimalPlaces = num => {
    const str = num.toString();

    if (str.includes('.')) {
      const decimals = str.split('.')[1];

      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }

    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  useEffect(() => {
    if (ref.current && plusRef.current) {
      const initialValue = String(direction === 'down' ? to : from);
      ref.current.textContent = initialValue;
      
      // Show plus sign immediately if needed
      if (addPlus && direction === 'up' && to > from) {
        plusRef.current.style.display = 'inline';
        plusRef.current.textContent = '+';
      } else {
        plusRef.current.style.display = 'none';
      }
    }
  }, [from, to, direction, addPlus]);

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === 'function') onStart();

      const timeoutId = setTimeout(() => {
        motionValue.set(direction === 'down' ? from : to);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(
        () => {
          if (typeof onEnd === 'function') onEnd();
        },
        delay * 1000 + duration * 1000
      );

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart, onEnd, duration]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', latest => {
      if (ref.current) {
        const hasDecimals = maxDecimals > 0;

        const options = {
          useGrouping: !!separator,
          minimumFractionDigits: hasDecimals ? maxDecimals : 0,
          maximumFractionDigits: hasDecimals ? maxDecimals : 0
        };

        let formattedNumber = Intl.NumberFormat('en-US', options).format(latest);
        
        if (separator) {
          formattedNumber = formattedNumber.replace(/,/g, separator);
        }

        ref.current.textContent = formattedNumber;
      }
    });

    return () => unsubscribe();
  }, [springValue, separator, maxDecimals, addPlus, direction, to, from]);

  return (
    <span className={className}>
      <span ref={ref} />
      <span ref={plusRef} style={{display: 'none'}} />
    </span>
  );
}