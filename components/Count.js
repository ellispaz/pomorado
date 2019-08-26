import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Vibration } from 'react-native';
import { Constants } from 'expo';
import ClockComponent from './ClockComponent'
import RestCounter from './RestCounter'



export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.timer*60,
      countSeconds: 0,
      countMinutes: this.props.timer,
      tomatoes: this.props.tomatoes,
      timerDone: false,
    };
  }

  componentDidMount() {
      this.interval = setInterval(this.increment, 1000)
}


  componentWillUnmount() {
    clearInterval(this.interval);
  }

  endTimer() {
    this.setState({
      timerDone: true,
    })
    this.props.updateTomatoe();
    Vibration.vibrate();
    console.log(this.state.timerDone)
    this.componentWillUnmount();
  }

  increment = () => {
    if (this.state.count === 0){
      this.endTimer();
    }

    if (!this.props.onStop && !this.state.timerDone) {
      this.setState({
        count: this.state.count - 1,
        countSeconds: this.state.countSeconds === 0 ? 59 : this.state.countSeconds - 1,
        countMinutes:
          this.state.count % 60 === 0
            ? this.state.countMinutes - 1
            : this.state.countMinutes,
      });
  }
}

updateTimerDone = (newValue) => {
  this.setState({
    timerDone: newValue,
  })
}

  render() {
    return (

      <View>
        {this.state.timerDone &&
            <RestCounter timerDone={this.state.timerDone}
                          onStop={this.props.onStop}
                          rest={this.props.rest}
                          updateTimerDone={this.updateTimerDone}/>}
      {!this.state.timerDone &&
            <Text style={styles.counter}>
        {this.state.countMinutes}:{this.state.countSeconds}
      </Text>}
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
