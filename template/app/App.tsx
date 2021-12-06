import React from 'react';
import {Main} from '@/components/screens';
import {store} from '@/store';
import {Provider} from 'react-redux';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
