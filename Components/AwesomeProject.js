/*
* @File_name AwesomeProject.js
* @Author: Caijw
* @Date:   2016-09-25 14:16:26
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-09-25 19:50:30
*/
import React, {
  Component,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,  
  Image
} from 'react-native';
 
import Forecast from './Forecast';

const API_KEY = 'bbeb34ebf60ad50f7893e7440a1e2b0b';
class AwesomeProject extends Component {

	constructor(props) {
    	super(props);
    	this.state = { 
    		zip: '222',
    		forecast: {
		        main: 'ddd',
		        description: 22,
		        temp: 22
		      }
    	 };
  	}


	_handleTextChange(event){
		console.log(event.nativeEvent.text);
		//改变state就改变对应的状态，重新渲染
		this.setState({
			zip : event.nativeEvent.text,
			forecast: {
				 main: event.nativeEvent.text,
		        description: 22,
		        temp: 22
		     }

		});
		var zip = event.nativeEvent.text;
		// fetch('http://api.openweathermap.org/data/2.5/weather?q='
  //     + zip + '&units=imperial&APPID=' + API_KEY)
		// .then((response)=>response.json())
		// .tehn((responseJSON)=>{
		// 	this.setState({
		// 		forecast:{
		// 			main: responseJSON.weather[0].main,
		// 			description : responseJSON.weather.description,
		// 			temp: responseJSON.main.temp
		// 		}
		// 	})
		// })
		// .catch((error)=>{
		// 	console.warn(error);
		// })
	}

	render() {
		var content = null
		if(this.state.forecast!==null){
			content = <Forecast 
                  main={this.state.forecast.main}
                  description={this.state.forecast.description}
                  temp={this.state.forecast.temp}/>;
		}
	    return (
	      <View style={styles.container}>
	      	<Image source={require('./flowers.png')}
	      	resizeMode = 'cover'
	      	style={styles.backdrop}>
				<View style={styles.overlay}>
		           <View style={styles.row}>
		             
		           </View>
		           <Text style={styles.mainText}>
		               Current weather for 
		             </Text>
		             <View style={styles.zipContainer}>
		               <TextInput
		                 style={[styles.zipCode, styles.mainText]}
		                 onSubmitEditing={(event) => this._handleTextChange(event)}/>
		             </View>
           {content}
         </View>
        </Image>
	
	      </View>
	    );
	}
}
const baseFontSize = 16;
var styles = StyleSheet.create({	
 container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column'
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: 30
  },
  zipContainer: {
    flex: 1,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    height: 30,
    marginTop: 3
  },
  zipCode: {
    width: 50,
    height: baseFontSize,
  },
  mainText: {
    flex: 1,
    fontSize: baseFontSize,
    height: 20,
    color: '#FFFFFF'
  }
});

export default AwesomeProject;