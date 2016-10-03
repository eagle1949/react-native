/*
* @File_name Bananas.js
* @Author: Caijw
* @Date:   2016-08-07 12:42:40
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-08-07 21:33:02
*/
import React, { Component } from 'react'; 
import { AppRegistry, Image } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}