import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Clock, DigitalClock } from 'react-native-skia-clock';

export default function App() {
  return (
    <View style={styles.container}>
      <Clock />

      <View style={styles.digitalClock}>
        <DigitalClock />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  digitalClock: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
