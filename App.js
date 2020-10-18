import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements'

import AnimOne from './src/anim_one';

const App = () =>  {
  return (
    <View>
      <Header centerComponent={{ text: 'Anim project', style: { color: '#fff' } }} />
      <AnimOne/>
    </View>
  );
}

export default App;
