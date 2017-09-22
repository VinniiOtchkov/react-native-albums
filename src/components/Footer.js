import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const Footer = () => {
  return (
  <View style={styles.viewStyle}>
    <Icon
    reverse
    raised
    name='headphones'
    type='font-awesome'
    color='#854D27'
    onPress={() => console.log('Works!')}
    />

  </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '15%',
    backgroundColor: '#F8F8F8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
});

export default Footer;
