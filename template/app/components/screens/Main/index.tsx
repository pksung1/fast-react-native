import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';

const Main = () => {
  const {t} = useTranslation();
  return (
    <View>
      <Text>{t('title')}</Text>
    </View>
  );
};

export default Main;
