import React from 'react';
import { Dimensions, Pressable, StyleSheet, View } from 'react-native';
import { Clock, ClockThemes, DigitalClock } from 'react-native-clocks';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../App';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const navigateToExample = (example: string) =>
    navigation.navigate('ClockExample', { example });

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Pressable
          style={styles.column}
          onPress={() => navigateToExample('Default')}
        >
          <Clock scale={0.33} />
        </Pressable>

        <Pressable
          style={styles.column}
          onPress={() => navigateToExample('Fire')}
        >
          <Clock theme={ClockThemes.Fire} scale={0.33} />
        </Pressable>

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
