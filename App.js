/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Home from './src/screens/Home';
import RootNavigation from './src/navigation';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black"/>
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
				<RootNavigation />
      </SafeAreaView>
    </>
  );
};

export default App;						