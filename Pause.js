import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import styles from './PopupStyles'
import Vegetables from './Vegetables'

export default class Pause extends Component {
  constructor(props) {
    super(props)
    // this.items = [
    //   {

    //   },
    //   {
    //     name: 'onion',
    //     price: 15,
    //     quantity: 0.5,
    //   },
    // ]
    this.items = [
      {
        name: 'potato',
        price: 12,
        quantity: 1,
      },
      {
        name: 'onion',
        price: 15,
        quantity: 0.5,
      },
      {
        name: 'cabbage',
        price: 30,
        quantity: 0.7,
      },
    ]
  }
  render() {
    return (
      <View style={styles.clearScreen}>
        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Add Items</Text>
          <Vegetables items={this.items} />
          <View style={styles.panelButtonsContainer}>
            <TouchableWithoutFeedback onPress={this.props.onReset}>
              <View style={styles.panelButton}>
                <Image
                  style={styles.panelButtonIcon}
                  resizeMode="contain"
                  source={Images.restartIcon}
                />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.props.onResume}>
              <View style={styles.panelButton}>
                <Image
                  style={styles.panelButtonIcon}
                  resizeMode="contain"
                  source={Images.playIcon}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    )
  }
}
