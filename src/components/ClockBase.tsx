import React, { useState } from 'react';
import { Text } from 'react-native';
import {
  Canvas,
  Circle,
  Group,
  Line,
  useClockValue,
  useComputedValue,
  vec,
} from '@shopify/react-native-skia';

const width = 256;
const height = 256;

function degreesToRadians(degrees: number) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

export const ClockBase = () => {
  const [currentSeconds] = useState(new Date().getSeconds());
  const clock = useClockValue();

  const secondsRotation = useComputedValue(() => {
    return [{ rotate: degreesToRadians(clock.current / 100) }];
  }, [clock]);

  const minutesRotation = useComputedValue(() => {
    return [{ rotate: degreesToRadians(clock.current / (60 * 60)) }];
  }, [clock]);

  const hoursRotation = useComputedValue(() => {
    return [{ rotate: degreesToRadians(clock.current / (60 * 60 * 60)) }];
  }, [clock]);

  const r = width / 2;

  return (
    <>
      <Canvas style={{ width, height }}>
        <Group>
          <Circle cx={r} cy={r} r={r} color="rgba(211,211,211, 0.2)" />

          <Group origin={{ x: r, y: r }} transform={secondsRotation}>
            <Line
              p1={vec(r, r)}
              p2={vec(r, 0)}
              color="red"
              style="stroke"
              strokeWidth={4}
            />
          </Group>

          <Group origin={{ x: r, y: r }} transform={minutesRotation}>
            <Line
              p1={vec(r, r)}
              p2={vec(r, r * 0.2)}
              color="green"
              style="stroke"
              strokeWidth={4}
            />
          </Group>

          <Group origin={{ x: r, y: r }} transform={hoursRotation}>
            <Line
              p1={vec(r, r)}
              p2={vec(r, r * 0.5)}
              color="blue"
              style="stroke"
              strokeWidth={4}
            />
          </Group>

          <Circle cx={r} cy={r} r={r / 50} color="black" />
        </Group>
      </Canvas>

      <Text>Seconds: {currentSeconds}</Text>
    </>
  );
};
