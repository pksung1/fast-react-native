import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './auth';
import {NavigationContainer} from '@react-navigation/native';

const RootStack = createNativeStackNavigator();

export default () => (
  <NavigationContainer>
    <RootStack.Navigator initialRouteName="auth">
      <RootStack.Screen name="auth" component={AuthNavigator} />
    </RootStack.Navigator>
  </NavigationContainer>
);
