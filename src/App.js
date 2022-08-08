import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import Home from './pages/Home';

const colorDark = '#002984';

console.log('test');

function App() {
  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor={colorDark} />
      <Home />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({});
