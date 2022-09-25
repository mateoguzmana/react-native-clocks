import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Clock, ClockThemes } from 'react-native-clocks';
import { RouteProp, useRoute } from '@react-navigation/native';
import type { RootStackParamList } from '../App';

type ClockExampleScreenNavigationProp = RouteProp<
  RootStackParamList,
  'ClockExample'
>;

export function ClockExample() {
  const route = useRoute<ClockExampleScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Clock theme={ClockThemes[route.params.example as never]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
});
