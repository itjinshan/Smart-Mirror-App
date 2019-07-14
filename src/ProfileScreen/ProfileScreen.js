import React, { Component } from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';  
import { Header } from 'react-native-elements';

class ProfileScreen extends React.Component {  
    render() {  
      return (  
          <View style={styles.container}>  
            <View>
              <Header
                backgroundColor= '#67baf6'
                centerComponent={{ text: 'Profile', style: { color: '#fff' } }}
              />
            </View>
            <View style={styles.top}>
              <View style={styles.profileImg}>

              </View>
            </View> 
            <View style={styles.center}>

            </View>
            <View style={styles.bottom}>
              
            </View>
          </View>  
      );  
    }  
  }  
  
  const styles = StyleSheet.create({  
    container: {  
        flex: 1
    },
    top: {
      height: '45%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#98d2c1',
    },
    center: {
      height: '10%',
      backgroundColor: '#7fbcac',
    },
    bottom: {
      height: '45%',
      backgroundColor: '#fff',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding : 5,
    },
    profileImg: {
      width: 140,
      height: 140,
      borderRadius: 100,
      borderWidth: 4,
      borderColor: '#fff',
      backgroundColor: '#eee',
    },
});  

export default ProfileScreen;