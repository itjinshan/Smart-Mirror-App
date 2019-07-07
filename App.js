/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';  
import {StyleSheet, Text, View,Button} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
class HomeScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Text>Home!</Text>  
        </View>  
    );  
  }  
}  
class ProfileScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Text>Profile!</Text>  
        </View>  
    );  
  }  
}  
class EditDisplayScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Edit Display!</Text>  
            </View>  
        );  
    }  
}  
class MirrorSetupScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Mirror Setup!</Text>  
            </View>  
        );  
    }  
} 
class LinkAccountScreen extends React.Component {  
  render() {  
      return (  
          <View style={styles.container}>  
              <Text>Link Accounts!</Text>  
          </View>  
      );  
  }  
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center'  
    },  
});  
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
  
export default createAppContainer(TabNavigator); 