/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

// http://c.3g.163.com/nc/article/BMU8KHQD00964J4O/full.html

var NewsDetail = React.createClass({
    getDefaultProps(){
      return{
         
      }  
    },

    getInitialState(){
      return{
          // 具体的数据
          detailData: ''
      }
    },
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>新闻详情</Text>
            </View>
        );
    },

    componentDidMount(){
       // 请求的路径
       var url_api = this.props.rowData.docurl;
       // console.log(url_api);

      // 发送请求
        fetch(url_api)
            .then((response)=>response.json())
            .then((responseData)=>{
                console.log(responseData);
            })
            .catch((error)=>{

            })

    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

// 输出类
module.exports = NewsDetail;
