/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  StatusBar,
  View
} from 'react-native';
//import Page from './src/js/page1';
//import Page from './src/js/page2';
import Page from './src/js/page3';


const App=()=>{
  return(
    <View>
      <StatusBar barstyle="light-content" />
      <Page />
    </View>
  );
};

AppRegistry.registerComponent('hw5_nightmare', () => App);
