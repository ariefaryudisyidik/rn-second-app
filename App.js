import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function App() {
  return (
    <View style={{padding: 16}}>
      <Text style={styles.text}>
        <Text style={{color: 'red'}}>Hello</Text>
        <Text style={{color: 'blue'}}>World</Text>
      </Text>
      <View style={styles.view}>
        <Text style={styles.arief}>Arief</Text>
        <Text style={{color: 'white'}}>Aryudi</Text>
        <Text style={styles.syidik}>Syidik</Text>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  arief: {
    color: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  syidik: {
    color: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  view: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
