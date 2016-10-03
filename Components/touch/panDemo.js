/*
* @File_name panDemo.js
* @Author: Caijw
* @Date:   2016-09-25 22:37:15
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-09-25 22:40:50
*/

'use strict';

import React， {Component} from 'react';

import {
	StyleSheet,
	PanResponder,
	View,
	Text
} from 'react-native';

const CIRCLE_SIZE = 40;
const CIRCLE_COLOR = 'blue';
const CIRCLE_HIGHLIGHT_COLOR = 'green';

class PanResponderExample extends Component{
	_panResponder = {}

	_previousTop = 0;
	_circleStyles= {};
	circle = null;

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	numberActiveTouches : 0,
	  	
	  };
	}

}