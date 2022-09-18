import React, { useEffect, useState } from 'react';
import {
  Canvas,
  Circle,
  Group,
  Line,
  RoundedRect,
  Text,
  useComputedValue,
  useFont,
  vec,
} from '@shopify/react-native-skia';

const WIDTH = 256;
const HEIGHT = 256;

const ONE_SECOND_IN_MS = 1000;
const ONE_MINUTE_IN_MS = ONE_SECOND_IN_MS * 60;
const ONE_HOUR_IN_MS = ONE_MINUTE_IN_MS * 60;

const SECOND_HANDLE_SIZE = 0.09;
const MINUTE_HANDLE_SIZE = 0.09;
const HOUR_HANDLE_SIZE = 0.5;

const NUMBER_OF_HOURS = 12;

const R = WIDTH / 2;

function degreesToRadians(degrees: number) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

export enum FaceShape {
  Circle = 'Circle',
  Square = 'Square',
}

export interface ClockProps {
  scale?: number;
  faceShape?: FaceShape;
  faceColor?: string;
}

export function Clock({
  scale = 1,
  faceShape = FaceShape.Circle,
  faceColor = 'rgba(211,211,211, 0.2)',
}: ClockProps) {
  const font = useFont(require('../fonts/digital-7.ttf'), 30);

  const [currentSeconds, setCurrentSeconds] = useState(new Date().getSeconds());
  const [currentMinutes, setCurrentMinutes] = useState(new Date().getMinutes());
  const [currentHours, setCurrentHours] = useState(new Date().getHours());

  const secondsRotation = useComputedValue(() => {
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

  if (!font) return null;

  return (
    <Canvas style={{ width: WIDTH, height: HEIGHT }}>
      <Group transform={[{ scale }]}>
        <ClockFace faceColor={faceColor} faceShape={faceShape} r={R} />

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

        <Group origin={{ x: R, y: R }} transform={[{ scale: 0.85 }]}>
          {new Array(NUMBER_OF_HOURS).fill(0).map((_, index) => {
            // deviation to adjust the difference after the calculation
            const dx = R * -0.06;
            const dy = R * 0.08;

            const angle = Math.PI / -2 + (2 * index * Math.PI) / 12;

            const x = R * Math.cos(angle) + (R + dx);
            const y = R * Math.sin(angle) + (R + dy);

            return (
              <Text
                font={font}
                y={y}
                x={x}
                text={`${index === 0 ? '12' : index}`}
                key={index}
                color="gray"
              />
            );
          })}
        </Group>

        <Circle
          cx={R}
          cy={R}
          r={R / 35}
          color="gray"
          style="stroke"
          strokeWidth={3}
        />
      </Group>
    </Canvas>
  );
}

export interface ClockFaceProps
  extends Pick<ClockProps, 'faceColor' | 'faceShape'> {}

export function ClockFace({ faceColor, faceShape }: ClockFaceProps) {
  if (faceShape === FaceShape.Circle) {
    return <Circle cx={R} cy={R} r={R} color={faceColor} />;
  }

  if (faceShape === FaceShape.Square) {
    return (
      <RoundedRect
        x={0}
        y={0}
        width={WIDTH}
        height={HEIGHT}
        r={4}
        color={faceColor}
      />
    );
  }

  return null;
}
