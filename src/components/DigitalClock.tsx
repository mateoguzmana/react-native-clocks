import React, { useMemo } from 'react';
import { Canvas, useFont, Text } from '@shopify/react-native-skia';

const WIDTH = 256;
const HEIGHT = 256;

function pad(n: number) {
  return n < 10 ? '0' + n : n;
}

export function DigitalClock() {
  const font = useFont(require('../fonts/digital-7.ttf'), 20);

  const getFormattedTime = useMemo(
    () => () => {
      const hours = pad(new Date().getHours());
      const minutes = pad(new Date().getMinutes());
      const seconds = pad(new Date().getSeconds());

      return `${hours}:${minutes}:${seconds}`;
    },
    []
  );

  if (!font) return null;

  return (
    <>
      <Canvas style={{ width: WIDTH, height: HEIGHT }}>
        <Text x={0} y={HEIGHT} text={getFormattedTime()} font={font} />
      </Canvas>
    </>
  );
}
