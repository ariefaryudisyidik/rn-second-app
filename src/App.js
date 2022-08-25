import React from 'react';
import {LogBox, StatusBar, View} from 'react-native';
import Home from './pages/Home';

const colorDark = '#002984';
const colorLight = '#FFFFFF';

LogBox.ignoreLogs(['Remote debugger']);

function App() {
  return (
    <View style={{flex: 1, backgroundColor: {colorLight}}}>
      <StatusBar barStyle="light-content" backgroundColor={colorDark} />
      <Home />
    </View>
  );
}

export default App;
