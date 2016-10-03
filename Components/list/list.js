/*
* @File_name list.js
* @Author: Caijw
* @Date:   2016-09-25 23:18:14
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-09-30 00:00:20
*/
import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View } from 'react-native';

class ListViewBasics extends Component {
  // 初始化模拟数据
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  render() {
    return (
      <View style={{paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

//导出格式要注意
export default ListViewBasics;