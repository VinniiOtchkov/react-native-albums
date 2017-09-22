import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
return (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{props.headerText}</Text>
  </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 60,
    paddingTop: 15,
    backgroundColor: '#F8F8F8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    elevation: 2,
    position: 'relative'
  }
};

//Make the component available to other parts of the App.
export default Header;
