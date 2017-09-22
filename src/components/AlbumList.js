import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => this.setState({ albums: res.data }));
  }

  render() {
    console.log(this.state);
    
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Album List</Text>
        <AlbumDetail />
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 20
    },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    elevation: 2,
    position: 'relative'
  }
};

export default AlbumList;
