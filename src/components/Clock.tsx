import React, { ReactChild, useEffect, useState } from 'react';
import { Pressable } from 'react-native';
import {
  BlurMask,
  Canvas,
  Circle,
  Group,
  Line,
  LinearGradient,
  RoundedRect,
  Text,
  useComputedValue,
  useFont,
  vec,
} from '@shopify/react-native-skia';

const WIDTH = 256;
const HEIGHT = 256;
const PADDING = 5;

const ONE_SECOND_IN_MS = 1000;

const SECOND_HANDLE_SIZE = 0.09;
const MINUTE_HANDLE_SIZE = 0.09;
const HOUR_HANDLE_SIZE = 0.5;

const NUMBER_OF_HOURS = 12;

const R = WIDTH / 2;

export const ClockThemes = {
  Default: ['#fff'],
  Dark: ['#1F4690', '#0F0E0E'],
  Fire: ['#E02401', '#F78812', '#E02401'],
  Chocolate: ['#603601', '#483434r'],
  Rainbow: ['#E40303', '#FF8C00', '#FFED00', '#008026', '#24408E', '#732982'],
  Ice: ['#8BBCCC', '#4C6793'],
  Retro: ['#31E1F7', '#400D51', '#D800A6', '#FF7777'],
  Christmas: ['#810000', '#557C55', '#810000'],
  Halloween: ['#000000', '#F58840', '#000000'],
};

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
  /**
   * @deprecated Use theme instead. To have a clock monocolor just pass the color as ['#121212'] for example.
   */
  faceColor?: string;
  /**
   * To have a clock monocolor just pass the color as ['#121212'] for example.
   */
  theme?: Array<string>;
  faceBlurMask?: number;
  onPress?(): void;
}

export function Clock({
  scale = 1,
  faceShape = FaceShape.Circle,
  theme = ClockThemes.Default,
  faceColor = undefined,
  faceBlurMask = 10,
  onPress,
}: ClockProps) {
  const font = useFont(require('../fonts/digital-7.ttf'), 30);

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const mainInterval = setInterval(() => {
      setDate(new Date());
    }, ONE_SECOND_IN_MS);
    return () => {
      clearInterval(mainInterval);
    };
  }, []);

  const secondsRotation = useComputedValue(() => {
    return [{ rotate: degreesToRadians(date.getSeconds() * 6) }];
  }, [date]);

  const minutesRotation = useComputedValue(() => {
    return [{ rotate: degreesToRadians(date.getMinutes() * 6) }];
  }, [date]);

  const hoursRotation = useComputedValue(() => {
    return [{ rotate: degreesToRadians(date.getHours() * 30) }];
  }, [date]);

  if (!font) return null;

  return (
    // @ts-expect-error Canvas isn't a valid JSX element...
    <Pressable style={{ transform: [{ scale }] }} onPress={onPress}>
      <Canvas style={{ width: WIDTH, height: WIDTH + PADDING }}>
        <ClockFace faceShape={faceShape}>
          <>
            <LinearGradient
              start={vec(0, 0)}
              end={vec(WIDTH, WIDTH)}
              colors={
                faceColor ? [faceColor] : theme ? theme : ClockThemes.Default!
              }
            />
            <BlurMask blur={faceBlurMask} style="inner" />
          </>
        </ClockFace>

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
      </Canvas>
    </Pressable>
  );
}

export interface ClockFaceProps
  extends Pick<ClockProps, 'faceColor' | 'faceShape'> {
  children: ReactChild;
}

export function ClockFace({ faceShape, children }: ClockFaceProps) {
  if (faceShape === FaceShape.Circle) {
    return (
      <Circle cx={R} cy={R} r={R}>
        {children}
      </Circle>
    );
  }

  if (faceShape === FaceShape.Square) {
    return (
      <RoundedRect x={0} y={0} width={WIDTH} height={HEIGHT} r={4}>
        {children}
      </RoundedRect>
    );
  }

  return null;
}
