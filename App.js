import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements'

import AnimOne from './src/anim_one';
import AnimTwo from './src/anim_two';
const App = () =>  {
  return (
    <View>
      <Header centerComponent={{ text: 'Anim project', style: { color: '#fff' } }} />
      <AnimTwo/>
    </View>
  );
}

export default App;
