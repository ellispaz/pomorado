import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import TopBar from './components/TopBar';
import Counter from './components/Count';
import ClockComponent from './components/ClockComponent'
import TimerPicker from './components/TimerPicker'

let id = 0;


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tomatoes: [],
      timer: '25',
      rest: '5',
    }
  }

  startTimer() {
    id++
    this.setState({
      tomatoes: [
        ...this.state.tomatoes,
        {id: id},
      ],
    })
  }

updateTimer = (newTimer) => {
  this.setState({
    timer: newTimer,
  });
}

updateRest = (newRest) => {
  this.setState({
    rest: newRest,
  });
}


  render() {
    return (
      <View>
      <View>
        <TopBar />
      </View>
        <ClockComponent timer={this.state.timer} rest={this.state.rest}/>
        <TimerPicker
          timer={this.state.timer}
          rest={this.state.rest}
          updateTime={this.updateTimer}
          updateRest={this.updateRest} />
        <View>
          <Text>Timer: {this.state.timer}</Text>
          <Text>Rest: {this.state.rest}</Text>
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  totalContainer: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
    left: 0,
    right: 0,
    bottom: 0,
   },
})
