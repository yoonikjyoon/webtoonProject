/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StatusBar} from 'react-native';
import {rootStore, StoreContext} from './stores';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: () => Node = () => {
  return (
    <SafeAreaProvider>
      <StoreContext.Provider value={rootStore}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
      </StoreContext.Provider>
    </SafeAreaProvider>
  );
};

export default App;
