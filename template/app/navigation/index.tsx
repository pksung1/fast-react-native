import React from 'react';
import {Main} from '@/components/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Main} />
  </Stack.Navigator>
);

const Navigation = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default Navigation;
