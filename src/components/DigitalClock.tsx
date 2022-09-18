import React, { useEffect, useState } from 'react';
import { Canvas, useFont, Text } from '@shopify/react-native-skia';

const DEFAULT_SIZE = 256;

function pad(n: number) {
  return n < 10 ? '0' + n : n;
}

const getFormattedTime = () => {
  const hours = pad(new Date().getHours());
  const minutes = pad(new Date().getMinutes());
  const seconds = pad(new Date().getSeconds());

  return `${hours}:${minutes}:${seconds}`;
};

export interface DigitalClockProps {
  width?: number;
  height?: number;
}

export function DigitalClock({
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
}: DigitalClockProps) {
  const [, setCurrentSeconds] = useState(new Date().getSeconds());
  const font = useFont(require('../fonts/digital-7.ttf'), 50);

  useEffect(() => {
    // this interval is purely to force the update of the clock every second
    const increaseSeconds = setInterval(() => {
      setCurrentSeconds((val) => val + 1);
    }, 1000);

    return () => clearInterval(increaseSeconds);
  }, []);

  if (!font) return null;

  return (
    <Canvas style={{ width, height }}>
      <Text x={0} y={height} text={getFormattedTime()} font={font} />
    </Canvas>
  );
}
