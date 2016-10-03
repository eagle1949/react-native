/*
* @File_name switch.js
* @Author: Caijw
* @Date:   2016-10-03 11:03:44
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-10-03 12:39:02
*/
import React, {
  Component,
} from 'react';


import {
  SwitchAndroid,
} from 'react-native';


class Switch extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
     	 value: false
   	  };
	}

	_onValueChange(value) {
		 //this.state.val = val;
	    this.setState({value:value});
	    if (this.props.onValueChange) {
	      this.props.onValueChange(value);      
	    }
	  }

	render() {
    return (
      <SwitchAndroid
        onValueChange={this._onValueChange.bind(this)}
        value={this.state.value}/>
      );
  }
}

export default Switch;