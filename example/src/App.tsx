import * as React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Clock } from 'react-native-clocks';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/2469122/pexels-photo-2469122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }}
        resizeMode="cover"
        style={styles.background}
      >
        <Clock />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#111111',
  },
  background: {
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
