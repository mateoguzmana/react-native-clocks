import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Clock } from 'react-native-clocks';

export default function App() {
  return (
    <View style={styles.container}>
      <Clock />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111111'
  },
  digitalClock: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
