import React from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import Footer from './src/components/Footer';

const App = () => (

  <View style={styles.container}>
    <Header headerText={'Albums'} />
    <AlbumList />
    <Footer />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
