import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Picker } from 'react-native';
import { Constants } from 'expo';

export default class TimerPicker extends React.Component {
  state = {
    timer: this.props.timer,
    rest: this.props.rest,
  }

  updateTimer = (timer) => {
    this.setState({ timer: timer });
    this.props.updateTime(timer);
  }
  updateRest = (rest) => {
    this.setState({ rest: rest });
    this.props.updateRest(rest);
  }


  render(){
      return(
        <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>Set Timer:  </Text>
          <Text style={styles.text}>Set Rest:</Text>
        </View>
          <View style={styles.picker}>
            <Picker
              selectedValue={this.state.timer}
              style={{height: 50, width: 100}}
              onValueChange={this.updateTimer}>
              <Picker.Item label="35" value= "35" />
              <Picker.Item label="30" value= "30" />
              <Picker.Item label="25" value= "25" />
              <Picker.Item label="20" value= "20" />
              <Picker.Item label="15" value= "15" />
              <Picker.Item label="10" value= "10" />
            </Picker>
            <Picker
              selectedValue={this.state.rest}
              style={{height: 50, width: 100}}
              onValueChange={this.updateRest}>
              <Picker.Item label="8" value= "8" />
              <Picker.Item label="7" value= "7" />
              <Picker.Item label="6" value= "6" />
              <Picker.Item label="5" value= "5" />
              <Picker.Item label="4" value= "4" />
              <Picker.Item label="3" value= "3" />
            </Picker>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  picker: {
    flexDirection: 'row',
    alignItems: 'center',
   },
  text: {
    fontSize: 20,
    flexDirection: 'row',

  },
})
