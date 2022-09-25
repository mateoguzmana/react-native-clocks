import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Clock, ClockThemes } from 'react-native-clocks';
import { RouteProp, useRoute } from '@react-navigation/native';
import type { RootStackParamList } from '../App';

type ClockExampleScreenNavigationProp = RouteProp<
  RootStackParamList,
  'ClockExample'
>;

const BackgroundImages = {
  Default:
    'https://images.wallpaperscraft.com/image/single/bricks_wall_brick_wall_170871_800x1420.jpg',
  Dark: 'https://images.pexels.com/photos/2469122/pexels-photo-2469122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  Fire: 'https://wallpapercave.com/wp/wp5080466.jpg',
  Chocolate: 'https://images.unsplash.com/photo-1543233604-3baca4d35513?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwY3VwfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  Rainbow: 'https://i.pinimg.com/736x/5c/14/d5/5c14d57b1252e2dfa7884bf35caddeb4.jpg',
  Ice: 'https://i.pinimg.com/736x/df/dc/23/dfdc234070d1f696db057d935daaa1e5.jpg',
  Retro: 'https://wallpapercave.com/wp/wp5679199.jpg',
  Christmas: 'https://worldofprintables.com/wp-content/uploads/2021/09/Christmas-iPhone-Aesthetic-Wallpaper-Decorations-473x1024.jpg',
  Halloween: 'https://wallpapercrafter.com/desktop/368169-Holiday-Halloween-Phone-Wallpaper.jpg',
};

export function ClockExample() {
  const route = useRoute<ClockExampleScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: BackgroundImages[route.params.example as never],
        }}
        resizeMode="cover"
        style={styles.background}
      >
        <Clock theme={ClockThemes[route.params.example as never]} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
