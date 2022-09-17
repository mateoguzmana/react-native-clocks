import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import {
  Canvas,
  Circle,
  Group,
  Line,
  useComputedValue,
  vec,
} from '@shopify/react-native-skia';

const width = 256;
const height = 256;

const ONE_SECOND_IN_MS = 1000;
const ONE_MINUTE_IN_MS = ONE_SECOND_IN_MS * 60;
const ONE_HOUR_IN_MS = ONE_MINUTE_IN_MS * 60;

const SECOND_HANDLE_SIZE = 0.09;
const MINUTE_HANDLE_SIZE = 0.09;
const HOUR_HANDLE_SIZE = 0.5;

const R = width / 2;

function degreesToRadians(degrees: number) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

export const ClockBase = () => {
  const [currentSeconds, setCurrentSeconds] = useState(new Date().getSeconds());
  const [currentMinutes, setCurrentMinutes] = useState(new Date().getMinutes());
  const [currentHours, setCurrentHours] = useState(new Date().getHours());

  const secondsRotation = useComputedValue(() => {
    console.log({ currentSeconds });
    return [{ rotate: degreesToRadians(currentSeconds * 6) }];
  }, [currentSeconds]);

  const minutesRotation = useComputedValue(() => {
    return [{ rotate: degreesToRadians(currentMinutes * 6) }];
  }, [currentMinutes]);

  const hoursRotation = useComputedValue(() => {
    return [{ rotate: degreesToRadians(currentHours * 30) }];
  }, [currentHours]);

  useEffect(() => {
    const increaseSeconds = setInterval(() => {
      setCurrentSeconds((val) => val + 1);
    }, ONE_SECOND_IN_MS);

    const increaseMinutes = setInterval(() => {
      setCurrentMinutes((val) => val + 1);
    }, ONE_MINUTE_IN_MS);

    const increaseHours = setInterval(() => {
      setCurrentHours((val) => val + 1);
    }, ONE_HOUR_IN_MS);

    return () => {
      clearInterval(increaseSeconds);
      clearInterval(increaseMinutes);
      clearInterval(increaseHours);
    };
  }, [setCurrentSeconds]);

  return (
    <>
      <Canvas style={{ width, height }}>
        <Group>
          <Circle cx={R} cy={R} r={R} color="rgba(211,211,211, 0.2)" />

          <Group origin={{ x: R, y: R }} transform={secondsRotation}>
            <Line
              p1={vec(R, R)}
              p2={vec(R, R * SECOND_HANDLE_SIZE)}
              color="red"
              style="stroke"
              strokeWidth={2}
            />
          </Group>

          <Group origin={{ x: R, y: R }} transform={minutesRotation}>
            <Line
              p1={vec(R, R)}
              p2={vec(R, R * MINUTE_HANDLE_SIZE)}
              color="gray"
              style="stroke"
              strokeWidth={4}
            />
          </Group>

          <Group origin={{ x: R, y: R }} transform={hoursRotation}>
            <Line
              p1={vec(R, R)}
              p2={vec(R, R * HOUR_HANDLE_SIZE)}
              color="gray"
              style="stroke"
              strokeWidth={4}
            />
          </Group>

          <Circle cx={R} cy={R} r={R / 50} color="gray" />
        </Group>
      </Canvas>

      <Text>
        Current Time:{' '}
        {`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`}
      </Text>
    </>
  );
};
