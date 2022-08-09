import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import Async from './pages/Async';

const colorDark = '#002984';
const colorLight = '#FFFFFF';

console.log('test');

function App() {
  return (
    <View style={{flex: 1, backgroundColor: {colorLight}}}>
      <StatusBar barStyle="light-content" backgroundColor={colorDark} />
      <Async />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  button: {},
});
