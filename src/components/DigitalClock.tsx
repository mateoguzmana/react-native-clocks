import React, { useEffect, useState } from 'react';
import { Canvas, useFont, Text } from '@shopify/react-native-skia';

const DEFAULT_FONT_SIZE = 50;

function pad(n: number) {
  return n < 10 ? '0' + n : n;
}

function getFormattedTime() {
  const hours = pad(new Date().getHours());
  const minutes = pad(new Date().getMinutes());
  const seconds = pad(new Date().getSeconds());

  return `${hours}:${minutes}:${seconds}`;
}

export interface DigitalClockProps {
  fontSize?: number;
}

export function DigitalClock({
  fontSize = DEFAULT_FONT_SIZE,
}: DigitalClockProps) {
  const [, setCurrentSeconds] = useState(new Date().getSeconds());
  const font = useFont(require('../fonts/digital-7.ttf'), fontSize);
  const text = getFormattedTime();

  useEffect(() => {
    // this interval is purely to force the update of the clock every second
    const increaseSeconds = setInterval(() => {
      setCurrentSeconds((val) => val + 1);
    }, 1000);

    return () => clearInterval(increaseSeconds);
  }, []);

  if (!font) return null;

  const textWidth = font.getTextWidth(text);

  return (
    <Canvas style={{ width: textWidth, height: fontSize }}>
      <Text y={fontSize * 0.8} text={getFormattedTime()} font={font} />
    </Canvas>
  );
}
