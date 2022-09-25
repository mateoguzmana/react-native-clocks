import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Clock, ClockThemes, DigitalClock } from 'react-native-clocks';

export default function App() {
  return (
    <View style={styles.container}>
      <Clock />

      <Clock theme={ClockThemes.Fire} />

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
    backgroundColor: '#121212',
  },
  digitalClock: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
