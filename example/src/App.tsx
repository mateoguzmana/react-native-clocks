import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { ClockBase } from 'react-native-skia-clock';

export default function App() {
  return (
    <View style={styles.container}>
      <ClockBase />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
