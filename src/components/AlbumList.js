import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => this.setState({ albums: res.data }));
  }

  renderAlbums() {
  return this.state.albums.map(album =>
    <AlbumDetail album={album} key={album.title} />
  );
}

  render() {
    console.log(this.state);

    return (
      <ScrollView bounces contentContainerStyle={styles.viewStyle}>
      {this.renderAlbums()}
      <AlbumDetail />
      </ScrollView>
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
    width: 'auto',
    height: 'auto',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    elevation: 2,
    position: 'relative'
  }
};

export default AlbumList;
