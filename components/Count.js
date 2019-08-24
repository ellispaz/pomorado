import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';
import ClockComponent from './ClockComponent'


export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countSeconds: 59,
      countMinutes: this.props.timer-1,
      tomatoes: this.props.tomatoes,
      test: 5,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.increment, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  increment = () => {
    console.log(this.state.tomatoes)
    if (this.props.onStop === false){
      this.setState({
        count: this.state.count +1,
        countSeconds: this.state.countSeconds === 0 ? 59 : this.state.countSeconds - 1,
        countMinutes:
          this.state.countSeconds === 0
            ? this.state.countMinutes - 1
            : this.state.countMinutes,
        tomatoes:
          this.state.countMinutes === 0
            ? this.state.tomatoes + 1
            : this.state.tomatoes,
      });
    }
  };

  vibrate = () => {

  }

  render() {
    return (
      <View>
      <Text style={styles.counter}>
        {this.state.countMinutes}:{this.state.countSeconds}
      </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    fontSize: 80,
    alignItems: 'center',
  },
});
