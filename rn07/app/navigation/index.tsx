import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './auth';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="auth">
      <Stack.Screen name="auth" component={AuthNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);
