/*
* @File_name Forecast.js
* @Author: Caijw
* @Date:   2016-09-25 15:54:29
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-09-25 16:26:00
*/
//导入component
import React, {
	Component,
} from 'react';

import {
	StyleSheet,
	Text,
	View
} from 'react-native';


class Forecast extends Component{
	render(){
		return (
				<View>
					<Text style={styles.bigText}>
						{this.props.main}
					</Text>
					<Text style={styles.mainText}>
						current conditionis {this.props.description}
					</Text>
					<Text style={styles.bigText}>
						{this.props.temp}F
					</Text>
				</View>
			);
	}
}	


const styles = StyleSheet.create({
	bigText : {
		flex : 2,
		fontSize : 20,
		textAlign : 'center',
		margin :10,
		color : '#FFFFFF'
	},
	mainText : {
		flex : 2,
		fontSize : 16,
		margin :10,
		textAlign : 'center',
		color : '#FFFFFF'
	}	
})

export default Forecast;