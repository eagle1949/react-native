/*
* @File_name Article.js
* @Author: Caijw
* @Date:   2016-08-02 22:17:45
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-08-02 22:18:06
*/
import React from "react";

export default class Article extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div class="col-md-4">
        <h4>{title}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
        <a class="btn btn-default" href="#">More Info</a>
      </div>
    );
  }
}