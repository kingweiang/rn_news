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
    TabBarIOS,
    NavigatorIOS
} from 'react-native';

var Icon = require('react-native-vector-icons/Ionicons')
var Home =require('./XMGHome')
var Find =require('./XMGFind')
var Message =require('./XMGMessage')
var Mine =require('./XMGMine')

var Main =React.createClass( {

    getInitialState: function() {
        return {
            selectedTab: 'Home',
            notifCount: 0,
            presses: 0,
        };
    },

    _renderContent: function(color: string, pageText: string, num?: number) {
        return (
            <View style={[styles.tabContent, {backgroundColor: color}]}>
                <Text style={styles.tabText}>{pageText}</Text>
                <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
            </View>
        );
    },

    render() {
        return (
            <TabBarIOS
                unselectedTintColor="yellow"
                tintColor="orange"
                // barTintColor="darkslateblue"
            >
               <TabBarIOS.Item
                    icon = {require('../ios/B3/Images.xcassets/TabBar/tabbar_home.imageset/tabbar_home@2x.png')}
                    title="首页"
                    selected ={this.state.selectedTab=='Home'}
                    onPress={()=>{this.setState({ selectedTab: 'Home'})}}
               >
                   <NavigatorIOS
                       tintColor="orange"
                       style={{flex:1}}
                       initialRoute={{
                           component:Home,
                           title:'Home',
                           leftButtonIcon:require('../ios/B3/Images.xcassets/NavigationBar/navigationbar_friendattention.imageset/navigationbar_friendattention@3x.png'),
                           rightButtonIcon:require('../ios/B3/Images.xcassets/NavigationBar/navigationbar_pop.imageset/navigationbar_pop@3x.png')
                           }
                       }
                   />
               </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon = {require('../ios/B3/Images.xcassets/TabBar/tabbar_discover.imageset/tabbar_discover@2x.png')}
                    title="首页"
                    selected ={this.state.selectedTab=='Find'}
                    onPress={()=>{this.setState({ selectedTab: 'Find'})}}
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                            component:Find,
                            title:'Find'
                        }
                        }
                    />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon = {require('../ios/B3/Images.xcassets/TabBar/tabbar_message_center.imageset/tabbar_message_center@3x.png')}
                    title="首页"
                    selected ={this.state.selectedTab=='Message'}
                    onPress={()=>{this.setState({ selectedTab: 'Message'})}}
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                            component:Message,
                            title:'Message'
                        }
                        }
                    />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon = {require('../ios/B3/Images.xcassets/TabBar/tabbar_profile.imageset/tabbar_profile@3x.png')}
                    title="首页"
                    selected ={this.state.selectedTab=='profile'}
                    onPress={()=>{this.setState({ selectedTab: 'profile'})}}
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                            component:Mine,
                            title:'Mine'
                        }
                        }
                    />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
})

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
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

module.exports = Main;