import React from 'react';
import { Canvas, Circle, ImageSVG, Skia } from '@shopify/react-native-skia';

const width = 256;
const height = 256;

const svg = Skia.SVG.MakeFromString(`<svg width="200" height="200">

<filter id="innerShadow" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/>
    <feOffset in="blur" dx="2.5" dy="2.5"/>
</filter>

<g>
    <circle id="shadow" style="fill:rgba(0,0,0,0.1)" cx="97" cy="100" r="87" filter="url(#innerShadow)"></circle>
    <circle id="circle" style="stroke: #FFF; stroke-width: 12px; fill:#20B7AF" cx="100" cy="100" r="80"></circle>
</g>
<g>
    <line x1="100" y1="100" x2="100" y2="55" transform="rotate(80 100 100)" style="stroke-width: 3px; stroke: #fffbf9;" id="hourhand">
        <animatetransform attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          dur="43200s"
                          repeatCount="indefinite"/>
    </line>
    <line x1="100" y1="100" x2="100" y2="40" style="stroke-width: 4px; stroke: #fdfdfd;" id="minutehand">
        <animatetransform attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          dur="3600s"
                          repeatCount="indefinite"/>
    </line>
    <line x1="100" y1="100" x2="100" y2="30" style="stroke-width: 2px; stroke: #C1EFED;" id="secondhand">
        <animatetransform attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          dur="60s"
                          repeatCount="indefinite"/>
    </line>
</g>
<circle id="center" style="fill:#128A86; stroke: #C1EFED; stroke-width: 2px;" cx="100" cy="100" r="3"></circle>
</svg>`);

export const ClockBase = () => {
  const r = width / 2;
  const innerR = r / 50;

  if (!svg) return null;

  return (
    <>
      <Canvas style={{ width, height }}>
        <Circle cx={r} cy={r} r={r} color="lightblue" />
        <Circle cx={r} cy={r} r={innerR} color="black" />
      </Canvas>

      <Canvas style={{ width, height }}>
        <ImageSVG svg={svg} x={0} y={0} width={290} height={500} />
      </Canvas>
    </>
  );
};
