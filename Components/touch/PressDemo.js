/*
* @File_name PressDemo.js
* @Author: Caijw
* @Date:   2016-09-25 22:41:15
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-09-25 23:06:55
*/
// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableHighlight
// } from 'react-native';

// class Button extends Component{
// 	constructor(props) {
// 	  super(props);
	
// 	  this.state = { pressing: false};
// 	}

// 	_onPressIn = () =>{
// 		this.setState({pressing: true});
// 	}


// 	_onPressOut = () =>{
// 		this.setState({pressing: false});
// 	}


// 	render(){
// 		return (
// 				<View style={styles.container}>
// 					<TouchableHighlight
// 						onPressIn = {this._onPressIn}
// 						onPressOut = {this._onPressOut}
// 						style={styles.touchable}>
// 						<View style={styles.button}>
// 							<Text style={styles.welcome}>
// 								{this.state.pressing ? 'EEK!' : 'PUSH ME'}
// 							</Text>
// 						</View>
// 					</TouchableHighlight>
// 				</View>
// 			);
// 	}
// }
// const styles = StyleSheet.create({
// 	container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     color: '#FFFFFF'
//   },
//   touchable: {
//     borderRadius: 100
//   },
//   button: {
//     backgroundColor: '#FF0000',
//     borderRadius: 100,
//     height: 200,
//     width: 200,
//     justifyContent: 'center'
//   },
// })

// export default Button;
// 
// 
// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableHighlight
// } from 'react-native';

// class Button extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { pressing: false };
//   }

//   _onPressIn = () => {
//     this.setState({pressing: true});
//   }

//   _onPressOut = () => {
//    this.setState({pressing: false}); 
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableHighlight
//           onPressIn={this._onPressIn}
//           onPressOut={this._onPressOut}
//           style={styles.touchable}>

//           <View style={styles.button}>
//             <Text style={styles.welcome}>
//               {this.state.pressing ? 'EEK!' : 'PUSH ME'}
//             </Text>
//           </View>

//         </TouchableHighlight>
//       </View>
//       );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     color: '#FFFFFF'
//   },
//   touchable: {
//     borderRadius: 100
//   },
//   button: {
//     backgroundColor: '#FF0000',
//     borderRadius: 100,
//     height: 200,
//     width: 200,
//     justifyContent: 'center'
//   },
// });


// export default Button;
// 
// 
// 'use strict';

// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   PanResponder,
//   View,
//   Text
// } from 'react-native';

// const CIRCLE_SIZE = 40;
// const CIRCLE_COLOR = 'blue';
// const CIRCLE_HIGHLIGHT_COLOR = 'green';

// class PanResponderExample extends Component {

//   // Set some initial values.
//   _panResponder = {}
//   _previousLeft = 0
//   _previousTop = 0
//   _circleStyles = {}
//   circle = null

//   constructor(props) {
//     super(props);
//     this.state = {
//       numberActiveTouches: 0,
//       moveX: 0,
//       moveY: 0,
//       x0: 0,
//       y0: 0,
//       dx: 0,
//       dy: 0,
//       vx: 0,
//       vy: 0
//     };
//   }

//   componentWillMount() {
//     this._panResponder = PanResponder.create({
//       onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
//       onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
//       onPanResponderGrant: this._handlePanResponderGrant,
//       onPanResponderMove: this._handlePanResponderMove,
//       onPanResponderRelease: this._handlePanResponderEnd,
//       onPanResponderTerminate: this._handlePanResponderEnd,
//     });
//     this._previousLeft = 20;
//     this._previousTop = 84;
//     this._circleStyles = {
//       style: {
//         left: this._previousLeft,
//         top: this._previousTop,
//       }
//     };
//   }

//   componentDidMount() {
//     this._updatePosition();
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View
//           ref={(circle) => {
//             this.circle = circle;
//           }}
//           style={styles.circle}
//           {...this._panResponder.panHandlers}/>
//         <Text>
//           {this.state.numberActiveTouches} touches,
//           dx: {this.state.dx},
//           dy: {this.state.dy},
//           vx: {this.state.vx},
//           vy: {this.state.vy}
//         </Text>
//       </View>
//     );
//   }

//   // _highlight and _unHighlight get called by PanResponder methods,
//   // providing visual feedback to the user.
//   _highlight = () => {
//     this.circle && this.circle.setNativeProps({
//       style: {
//         backgroundColor: CIRCLE_HIGHLIGHT_COLOR 
//       }
//     });
//   }

//   _unHighlight = () => {
//     this.circle && this.circle.setNativeProps({
//       style: {
//         backgroundColor: CIRCLE_COLOR
//       }
//     });
//   }

//   // We're controlling the circle's position directly with setNativeProps.
//   _updatePosition = () => {
//     this.circle && this.circle.setNativeProps(this._circleStyles);
//   }

//   _handleStartShouldSetPanResponder = (e: Object, gestureState: Object) => {
//     // Should we become active when the user presses down on the circle?
//     return true;
//   }

//   _handleMoveShouldSetPanResponder = (e: Object, gestureState: Object) => {
//     // Should we become active when the user moves a touch over the circle?
//     return true;
//   }

//   _handlePanResponderGrant = (e: Object, gestureState: Object) => {
//     this._highlight();
//   }

//   _handlePanResponderMove = (e: Object, gestureState: Object) => {
//     this.setState({
//       stateID: gestureState.stateID,
//       moveX: gestureState.moveX,
//       moveY: gestureState.moveY,
//       x0: gestureState.x0,
//       y0: gestureState.y0,
//       dx: gestureState.dx,
//       dy: gestureState.dy,
//       vx: gestureState.vx,
//       vy: gestureState.vy,
//       numberActiveTouches: gestureState.numberActiveTouches
//     });

//     // Calculate current position using deltas
//     this._circleStyles.style.left = this._previousLeft + gestureState.dx;
//     this._circleStyles.style.top = this._previousTop + gestureState.dy;
//     this._updatePosition();
//   }

//   _handlePanResponderEnd = (e: Object, gestureState: Object) => {
//     this._unHighlight();
//     this._previousLeft += gestureState.dx;
//     this._previousTop += gestureState.dy;
//   }
// }

// const styles = StyleSheet.create({
//   circle: {
//     width: CIRCLE_SIZE,
//     height: CIRCLE_SIZE,
//     borderRadius: CIRCLE_SIZE / 2,
//     backgroundColor: CIRCLE_COLOR,
//     position: 'absolute',
//     left: 0,
//     top: 0,
//   },
//   container: {
//     flex: 1,
//     paddingTop: 64,
//   },
// });

// export default PanResponderExample;



import React, {
  Component,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} from 'react-native';

import BookItem from './BookItem';

class BookList extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows([])
    }
  }

  componentDidMount() {
    this._refreshData();
  }

  _renderRow(rowData) {
    return (<BookItem
              coverURL={rowData.book_image}
              title={rowData.title}
              author={rowData.author}/>);
  }

  _refreshData() {
    var books = [
      {
        rank: 1,
        title: 'GATHERING PREY',
        author: 'John Sandford',
        book_image: 'http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9780399168796.jpg'
      },
      {
        rank: 2,
        title: 'MEMORY MAN',
        author: 'David Baldacci',
        book_image: 'http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9781455586387.jpg'
      }
    ];

    this.setState({
      books: books,
      dataSource: this.state.dataSource.cloneWithRows(books)
    });

  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          contentContainerStyle={styles.listContent}
          style={styles.list}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 24
  },
  list: {
    flex: 1,
    flexDirection: 'row'
  },
  listContent: {
    flex: 1,
    flexDirection: 'column'
  },
  row: {
    flex: 1,
    fontSize: 24,
    padding: 42,
    borderWidth: 1,
    borderColor: '#DDDDDD'
  }
});

export default BookList;
