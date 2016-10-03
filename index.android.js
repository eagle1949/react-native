/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import { AppRegistry, Image } from 'react-native';
// //import Bananas from './Components/Bananas';
// //import BlinkApp from './Components/BlinkApp';
// import FixedDimensionsBasics from './Components/FixedDimensionsBasics';
// import React,  { Component } from "react";
// import { AppRegistry, Image } from 'react-native';
// import { Router, Route, IndexRoute, hashHistory } from "react-router";

// import Archives from "./pages/Archives";
// import Featured from "./pages/Featured";
// import Layout from "./pages/Layout";
// import Settings from "./pages/Settings";

// class AwesomeProject extends Component {
//   render() {
//     return(
//     	<Settings />
//    //     <Router history={hashHistory}>
// 	  //   <Route path="/" component={Layout}>
// 	  //     <IndexRoute component={Featured}></IndexRoute>
// 	  //     <Route path="archives(/:article/:date/:filter)" name="archives" component={Archives}></Route>
// 	  //     <Route path="settings" name="settings" component={Settings}></Route>
// 	  //   </Route>
// 	  // </Router>
//     )      
//   }
// }




//weatherProject
import {
  AppRegistry,
} from 'react-native';
// import AwesomeProject1 from './Components/AwesomeProject';
// import Button from './Components/touch/PressDemo';
// import ListViewBasics from './Components/list/list';

import BookList from './Components/list/MockBookList';

import CrossPlatform from './Components/platformSpecific/CrossPlatform'

AppRegistry.registerComponent('AwesomeProject', () => CrossPlatform);
