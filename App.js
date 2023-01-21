/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Navigator from './app/navigation/navigator';


const App = () => {
  return (
    <SafeAreaView style={{flex: 1,
    // backgroundColor: '#f75d5d'
    }}>
      <StatusBar barStyle={'dark-content'} />
      <Navigator />
    </SafeAreaView>
  );
}

export default App;
