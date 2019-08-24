import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';

const styles=StyleSheet.create({
  text: {fontSize: 50},
  color: {color: '#fff'},
})

class TopBar extends React.Component {
  render() {
    return (
      <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: this.props.title,
              style: { color: '#fff', fontSize: 30 } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
      />
    );
  }
}

export default TopBar;
