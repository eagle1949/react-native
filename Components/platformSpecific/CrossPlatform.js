/*
* @File_name CrossPlatform.js
* @Author: Caijw
* @Date:   2016-10-03 11:15:36
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-10-03 12:40:59
*/
import React, {
  Component,
} from 'react';


import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


import Switch from './switch';

class CrossPlatform extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {val:false};
	}

	 _onValueChange(val) {
	    this.setState({val: val});
	  }	
	render() {
	    var colorClass = this.state.val ? styles.blueContainer : styles.redContainer;
	    return (
	      <View style={[styles.container, colorClass]}>
	        <Text style={styles.welcome}>
	          Make me blue!
	        </Text>
	        <Switch onValueChange={this._onValueChange.bind(this)}/>
	      </View>
    );
  }
}

var styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent : 'center',
		alignItems : 'center'
	},
	blueContainer :{
		backgroundColor : '#5555ff'
	},
	redContainer : {
		backgroundColor : '#ff5555'
	},
	welcome : {
		fontSize:20,
		textAlign : 'center',
		margin:10
	}
})
export default CrossPlatform;