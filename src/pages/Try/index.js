import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

function Try() {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#002984" />

      <Text style={styles.header}>
        <Text style={{color: 'red'}}>Hello</Text>
        <Text style={{color: 'blue'}}>World</Text>
      </Text>

      <View style={{flex: 1, padding: 16}}>
        <View style={styles.view}>
          <Text style={styles.arief}>Arief</Text>
          <Text style={{color: 'white'}}>Aryudi</Text>
          <Text style={styles.syidik}>Syidik</Text>
        </View>

        <View
          style={{
            marginTop: 16,
            backgroundColor: 'aqua',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text>Hello 1</Text>
          <Text>Hello 2</Text>
          <Text>Hello 3</Text>
        </View>
      </View>
    </View>
  );
}

export default Try;

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
  header: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 2,
    backgroundColor: '#757de8',
  },
  view: {
    flex: 0.2,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
