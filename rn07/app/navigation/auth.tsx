import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {LoginScreen, SignupScreen} from '@/screen/auth';
import React from 'react';

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
};

export type AuthStackProps = NativeStackScreenProps<
  AuthStackParamList,
  'Login',
  'Signup'
>;

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
  </Stack.Navigator>
);
