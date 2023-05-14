import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View, TextInput, Button} from 'react-native';

type LoginType = 'kakao' | 'naver' | 'google' | 'apple';

interface LoginForm {
  id: string;
  password: string;
}

const LoginScreen = () => {
  const {control, handleSubmit} = useForm<LoginForm>({
    defaultValues: {
      id: '',
      password: '',
    },
  });
  const idpwLogin = ({id, password}: LoginForm) => {
    console.log(id, password);
  };
  const snsLogin = (loginType: LoginType) => {
    switch (loginType) {
      case 'kakao':
        break;
      case 'naver':
        break;
      case 'google':
        break;
      case 'apple':
        break;
      default:
        break;
    }
  };

  return (
    <View>
      <Controller
        control={control}
        name="id"
        render={({field: {onChange, value}}) => (
          <TextInput
            placeholder="id"
            value={value}
            onChange={e => onChange(e.nativeEvent.text)}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({field: {onChange, value}}) => (
          <TextInput
            placeholder="password"
            value={value}
            onChange={e => onChange(e.nativeEvent.text)}
          />
        )}
      />
      <Button title="로그인" onPress={handleSubmit(idpwLogin)} />
      <Button title="카카오" onPress={() => snsLogin('kakao')} />
      <Button title="구글" onPress={() => snsLogin('google')} />
      <Button title="애플" onPress={() => snsLogin('apple')} />
    </View>
  );
};

export default LoginScreen;
