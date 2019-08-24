import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

class ZeroCounter extends React.Component {
  render(props) {
    return (
      <View>
      <Text style={styles.counter}>
      {this.props.timer}:00
      </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  counter: {
    fontSize: 80,
  }

})

export default ZeroCounter
