import * as React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Clock, ClockThemes, DigitalClock } from 'react-native-clocks';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Clock scale={0.33} />
        </View>

        <View style={styles.column}>
          <Clock theme={ClockThemes.Fire} scale={0.33} />
        </View>

        <View style={styles.column}>
          <Clock theme={ClockThemes.Dark} scale={0.33} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Clock theme={ClockThemes.Chocolate} scale={0.33} />
        </View>

        <View style={styles.column}>
          <Clock theme={ClockThemes.Rainbow} scale={0.33} />
        </View>

        <View style={styles.column}>
          <Clock theme={ClockThemes.Ice} scale={0.33} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Clock theme={ClockThemes.Retro} scale={0.33} />
        </View>

        <View style={styles.column}>
          <Clock theme={ClockThemes.Christmas} scale={0.33} />
        </View>

        <View style={styles.column}>
          <Clock theme={ClockThemes.Halloween} scale={0.33} />
        </View>
      </View>

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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    height: 130,
  },
  column: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: Dimensions.get('screen').width * 0.33,
  },
  digitalClock: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
