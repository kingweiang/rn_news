/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

var LocalData = require('../LocalData.json')
var ScrollImage = require('./XMGScrollImage');
var NewsDetail = require('./XMGNewsDetail');

var Home =React.createClass( {
    getDefaultProps(){
        return {
            url_api: "http://10.129.73.183/news.json",
            key_word: 'T12345',
            key_news:'news'
        }
    },
    // 初始化数据
    getInitialState(){
        return{
            // 头部跑马灯数据
            headerDateArr:[],
            // 新闻列表数据
            dataSource:new ListView.DataSource({
                rowHasChanged:(r1,r2)=>r1!==r2
            })
        }
    },

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                renderHeader={this.renderHeader}
            />
        );
    },
    // 列表明细
    renderRow(rowData){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>this.pushToNewsDetail(rowData)}>
                 <View style={styles.cellViewStyle}>
                     <Image source={{uri:rowData.imgurl}} style={styles.imgStyle}/>
                     <View style={styles.rightViewStyle}>
                         <Text style={styles.titleStyle}>{rowData.title}</Text>
                         <Text style={styles.subTitleStyle}>{rowData.time}</Text>
                         <Text style={styles.flowTitleStyle}>{rowData.tienum}跟帖</Text>
                     </View>
                 </View>
            </TouchableOpacity>
        );
    },
    // 跳转到新闻详情页
    pushToNewsDetail(rowData){

        // alert(rowData.title);
        this.props.navigator.push({
            component: NewsDetail,
            title: rowData.title,
            passProps:{rowData}
        })
    },
    // 头部广告
    renderHeader(){
        // 判断值
        if(this.state.headerDataArr==0) return;
        return(
            <ScrollImage
                imageDataArr = {this.state.headerDataArr}
            />
        );
    },

    // 请求网络数据
    componentDidMount(){
        this.loadDataFromNet();
    },

    loadDataFromNet(){
        fetch(this.props.url_api)
            .then((response)=>response.json())
            .then((responseData)=>{
                var jsonData = responseData[this.props.key_word];
               this.dealWithData(jsonData);
            })
            .catch((error)=>{
                if(error){
                    var jsonData = LocalData[this.props.key_word];
                    this.dealWithData(jsonData);
                }
            })
    },

    // 处理网络数据
    dealWithData(jsonData){
        // 定义临时变量
        var headerArr = [], listDataArr = [];
        // 遍历拿到的json数据
        for(var i=0; i<jsonData.length; i++){
            // 取出单独的对象
            var data = jsonData[i];
            // 判断
            if(data.hasAD == 1){ // 取出广告数据
                headerArr[i]=jsonData[i];
            }else{ // 剩余的行数据
                listDataArr.push(data);
            }
        }

        // 更新状态机
        this.setState({
            // ListView头部的数据源
            headerDataArr: headerArr,
            // cell的数据源
            dataSource: this.state.dataSource.cloneWithRows(listDataArr)
        });

        console.log(headerArr, listDataArr);
    }
})

const styles = StyleSheet.create({
    cellViewStyle:{
        // 确定主轴的方向
        flexDirection:'row',
        // 设置侧轴的对齐方式
        // alignItems:'center',
        padding:10,
        // 设置下边框
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5

    },

    imgStyle:{
        width:90,
        height:90
    },

    rightViewStyle:{
        width: 260,
        marginLeft:8
    },

    titleStyle:{
        fontSize:15,
        marginBottom:5
    },

    subTitleStyle:{
        fontSize:12,
        color:'gray'
    },

    flowTitleStyle:{
        // 绝对定位
        position:'absolute',
        right:10,
        bottom:0,

        // 边框
        borderWidth:0.5,
        borderColor:'gray',
        borderRadius:5,   //弧度
        padding:3,
        fontSize:10,
        color:'gray'
    }
});

module.exports = Home;
