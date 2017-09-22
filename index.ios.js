import React from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import Header from './src/components/Header';

const App = () => (

  <View style={styles.container}>
    <Header headerText={'Albums'} />

    <Icon
  raised
  reverse
  name='headphones'
  type='font-awesome'
  color='#854D27'
  onPress={() => console.log('Works!')}
    />

    <Icon
  raised
  reverse
  name='ios-beer'
  type='ionicon'
  color='#DD7230'
  onPress={() => console.log('Works!')}
    />

    <Icon
  raised
  reverse
  name='ios-game-controller-a'
  type='ionicon'
  color='#F4C95D'
  onPress={() => console.log('Works!')}
    />


  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
