/*
* @File_name Archives.js
* @Author: Caijw
* @Date:   2016-08-02 22:11:22
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-09-19 20:01:42
*/
import React from "react";

import Article from "../Components/Article";

export default class Archives extends React.Component {

	render(){
		console.log(this.props);
		const { query } = this.props.location;
		const { params} = this.props;
		const { article } = params;
		const { date, filter } = params;

		const Articles = [
		"some Articles",
		"some Articles",
		"some Articles",
		"some Articles",
		"some Articles",
		"some Articles"
		].map((title, i)=> <Article key={i} title={title}/>);
	
		return (
			<div>
		        <h1>Archives</h1>
		        article: {article}, date: {date}, filter: {filter}
		        <div class="row">{Articles}</div>
		      </div>
		);
	}
}
