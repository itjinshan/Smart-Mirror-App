import React, { Component } from 'react';  
import {StyleSheet, Text, View,Button} from 'react-native';  

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

  export default LinkAccountScreen