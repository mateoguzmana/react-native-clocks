import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/Home';
import { ClockExample } from './screens/ClockExample';

export type RootStackParamList = {
  Home: undefined;
  ClockExample: { example: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ClockExample" component={ClockExample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
