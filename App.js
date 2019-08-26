/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';  
import {StyleSheet, Text, View,Button,YellowBox} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  

import EditDisplayScreen from './src/editDisplayScreen/EditDisplayScreen'
import HomeScreen from './src/HomeScreen/HomeScreen';
import ProfileScreen from './src/ProfileScreen/ProfileScreen';
import MirrorSetupScreen from './src/MirrorSetupScreen/MirrorSetUpScreen';
import LinkAccountScreen from './src/LinkAccountScreen/LinkAccountScreen'

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
    ,'Setting a timer'
]);

export default class App extends Component {
    render(){
        return(
            <AppContainer />
        )
    }
}


const TabNavigator = createMaterialBottomTabNavigator(  
    {  
        Home: { screen: HomeScreen,  
            navigationOptions:{  
                tabBarLabel:'Home',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                    </View>),  
            }  
        },  
        Profile: { screen: ProfileScreen,  
            navigationOptions:{  
                tabBarLabel:'Profile',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
                    </View>), 
            }  
        },  
        EditDisplay: { screen: EditDisplayScreen,  
            navigationOptions:{  
                tabBarLabel:'Edit Display',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-tablet-portrait'}/>  
                    </View>),    
            }  
        },  
        MirrorSetup: {  
            screen: MirrorSetupScreen,  
            navigationOptions:{  
                tabBarLabel:'Mirror Setup',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-wifi'}/>  
                    </View>),  
            }  
        },
        LinkAccount: {  
          screen: LinkAccountScreen,  
          navigationOptions:{  
              tabBarLabel:'Link Account',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-people'}/>  
                  </View>),  
          }  
      },   
    },  
    {  
      initialRouteName: "Home",  
      activeColor: '#615af6',  
      inactiveColor: '#b0d2f2',  
      barStyle: { backgroundColor: '#67baf6' }, 
    },  
);  


const AppContainer = createAppContainer(TabNavigator);