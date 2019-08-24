import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native'
import Counter from './Count';
import ZeroCounter from './ZeroCount'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      showCounter: false,
      stop: false,
    }
  }

  stopCounter = () => this.setState(prevState => ({
    stop: true,
  }))

  startCounter = () => this.setState(prevState => ({
    showCounter: true,
    stop: false,
  }))

  resetCounter = () => this.setState(prevState => ({
    showCounter: false,
    stop: false
  }))

  consolLog = () => {
    console.log(this.state.stop)
  }

  render(props) {
    return (
      <View style={styles.clockContainer}>
      {this.state.showCounter && <Counter onStop={this.state.stop}
                                          timer={this.props.timer}
                                          rest={this.props.rest}/>}
      {!this.state.showCounter && <ZeroCounter timer={this.props.timer} />}
      <View>
        <Button
          title="Start"
          onPress={this.startCounter}
          color="#32cd32" />
        <Button
          title="Stop"
          onPress={this.stopCounter}
          color="#dc143c" />
        <Button
        title="Reset"
        onPress={this.resetCounter}
        color="#0000ff" />
      </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  clockContainer: {
    alignItems: 'center',
  },
})
