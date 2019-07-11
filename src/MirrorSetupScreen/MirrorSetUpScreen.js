import React, { Component } from 'react'
import {StyleSheet, Text, View,Button} from 'react-native';  

class MirrorSetupScreen extends Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Mirror Setup!</Text>  
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
export default MirrorSetupScreen