/*
* @File_name Layout.js
* @Author: Caijw
* @Date:   2016-08-02 22:25:51
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-09-19 20:01:48
*/
import React from "react";
import { Link } from "react-router";

import Footer from "../Components/layout/Footer";
import Nav from "../Components/layout/Nav";

export default class Layout extends React.Component{
	render(){
		const {location} = this.props;

		const containerStyle = {
			marginTop : "50px"
		}
		return (
      <div>

        <Nav location={location} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>KillerNews.net</h1>

              {this.props.children}

            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
	}
}