import React from 'react';

// simple example skia
import { View } from 'react-native';
import { Canvas, Circle } from '@shopify/react-native-skia';

export default function SkiaExample() {
  return (
    <View style={{ flex: 1 }}>
      <Canvas style={{ flex: 1 }}>
        <Circle r={100} color="red" />
      </Canvas>
    </View>
  );
}
