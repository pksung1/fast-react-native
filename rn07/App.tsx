/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigation from '@/navigation';

import libInit from '@/lib/init';
import {queryClient} from '@/lib/reactQueryClient';
import {QueryClientProvider} from '@tanstack/react-query';

libInit();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigation />
    </QueryClientProvider>
  );
}

export default App;
