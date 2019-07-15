import React, { Component } from 'react';
import {StyleSheet,
        Text,
        View,
        Button,
        Image} from 'react-native';  
import { Header } from 'react-native-elements';
import moment from 'moment';

class ProfileScreen extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      //defauilt value of the time
      time: '',
      greeting: '',
    };
  }
  componentDidMount() {
//Getting the current date-time with required formate and UTC   
    var hour = moment()
      .format('HH');

    this.setState({ time: hour });
    //Settign up time to show
    if(hour < 12){
      this.setState({greeting: 'Good Morning!'})
    }
    else if(hour > 12 && hour < 18){
      this.setState({greeting: 'Good Afternoon!'})
    }
    else{
      this.setState({greeting: 'Good Evening!'})
    }
  }
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
                <Image style={styles.profileImg} 
                       source={{uri:'https://freehindistatus.com/wp-content/uploads/2018/05/cute-baby-whatsapp-profile-300x300.jpg'}} />
            </View> 
            <View style={styles.center}>
              <Text>{this.state.greeting}</Text>
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
      height: '25%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#98d2c1',
    },
    center: {
      height: '10%',
      backgroundColor: '#7fbcac',
    },
    bottom: {
      height: '65%',
      backgroundColor: '#fff',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding : 5,
    },
    profileImg: {
      width: 140,
      height: 140,
      borderRadius: 70,
      borderWidth: 4,
      borderColor: '#fff',
      backgroundColor: '#eee',
    },
});  

export default ProfileScreen;