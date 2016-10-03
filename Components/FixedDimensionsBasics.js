/*
* @File_name FixedDimensionsBasics.js
* @Author: Caijw
* @Date:   2016-08-07 22:05:11
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-08-07 22:33:13
*/
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';

export default class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={styles.powderblue} />
        <View style={styles.skyblue} />
        <View style={styles.steelblue} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
	powderblue : {width: 50, height: 50, backgroundColor: 'powderblue'},
	skyblue : {width: 100, height: 100, backgroundColor: 'skyblue'},
	steelblue : {width: 150, height: 150, backgroundColor: 'steelblue'}
})