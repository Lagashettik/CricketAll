/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={styles.flexOne}>
      <StatusBar
        barStyle={'light-content'}
      />
        <View style={styles.container} >
          <Text >Welcome to CricketAll</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flexOne: {flex: 1},
  container: {flex: 1, justifyContent:'center', alignItems:'center'}
});

export default App;
