import React from 'react';
import {store} from '@/store';
import {Provider} from 'react-redux';
import Navigation from './navigation';
import './i18n';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
