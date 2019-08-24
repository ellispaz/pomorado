import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import TopBar from './components/TopBar';
import Counter from './components/Count';
import ClockComponent from './components/ClockComponent'
import TimerPicker from './components/TimerPicker';;
import {vibrate} from './utils';

let id = 0;


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tomatoes: 0,
      timer: '25',
      rest: '5',
      showTimer: 'false',
    }
  }

toggleTimer = () => {
  this.setState({
    showTimer: !this.state.showTimer,
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

updateTomatoes = (newTomatoe) => {
  this.setState({
    tomatoes: this.state.tomatoes +1,
  })
}

render() {
  return (
    <View>
    <View>
      <TopBar />
    </View>
    <View>
      <Button
        title="Set Time"
        onPress={this.toggleTimer} />
    </View>
    <View>
    {this.state.showTimer && <ClockComponent timer={this.state.timer}
                      rest={this.state.rest}
                      tomatoes={this.state.tomatoes}
                      updateTomatoe={this.updateTomatoes}/>}
    {!this.state.showTimer && <TimerPicker
        timer={this.state.timer}
        rest={this.state.rest}
        updateTime={this.updateTimer}
        updateRest={this.updateRest} />}
    </View>
    <View style={styles.tomatoes}>
      {this.state.showTimer && <Text>Number of Tomatoes:{this.state.tomatoes}</Text>}
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
    left: 0,
    right: 0,
    bottom: 5,
   },
  tomatoes: {
    position: 'absolute',
    bottom: 0,
  }
})
