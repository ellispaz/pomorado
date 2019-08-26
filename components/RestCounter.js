import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Vibration } from 'react-native';
import { Constants } from 'expo';
import ClockComponent from './ClockComponent'



export default class RestCounter extends React.Component {
  state ={
    timerDone: this.props.timerDone,
    rest: this.props.rest*60,
    countSeconds: 0,
    countMinutes: this.props.rest -1,
    onStop: this.props.onStop,
  }

  componentDidMount() {
      this.interval = setInterval(this.increment, 1000)
    }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  endTimer() {
    this.setState({
      timerDone: false,
    })
    Vibration.vibrate();
    this.componentWillUnmount();
  }


  increment = () => {
    console.log(this.state.rest)
    if (this.state.rest === 0){
      this.endTimer();
    }

    if (!this.props.onStop) {
      this.setState({
        rest: this.state.rest - 1,
        countSeconds: this.state.countSeconds === 0 ? 59 : this.state.countSeconds - 1,
        countMinutes:
          this.state.count % 60 === 0
            ? this.state.countMinutes - 1
            : this.state.countMinutes,
      });
  }
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
