import React, { Component } from 'react';
import {StyleSheet,
        Text,
        View,
        Button,
        Image,
        ScrollView} from 'react-native';  
import { Header } from 'react-native-elements';
import moment from 'moment';
import EditProfile from './EditProfile';

class ProfileScreen extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Alex',
      greeting: '',
    };
  }
  componentDidMount() {  
    var hour = moment()
      .format('HH');

    this.setState({ time: hour });
    if(hour < 12){
      this.setState({greeting: 'Good Morning, ' + this.state.userName})
    }
    else if(hour >= 12 && hour < 18){
      this.setState({greeting: 'Good Afternoon, ' + this.state.userName})
    }
    else if(hour >= 18 && hour <= 24){
      this.setState({greeting: 'Good Evening, ' + this.state.userName})
    }
  }
    render() {  
      return (  
          <View style={styles.container}>  
            <View>
              <Header
                backgroundColor= '#7fbcac'
                centerComponent={{ text: 'Profile', style: { color: '#fff' } }}
              />
            </View>
            <View style={styles.top}>
                <Image style={styles.profileImg} 
                       source={{uri:'https://freehindistatus.com/wp-content/uploads/2018/05/cute-baby-whatsapp-profile-300x300.jpg'}} />
            </View> 
            <View style={styles.center}>
              <Text style={styles.greetingMsg}>{this.state.greeting}</Text>
            </View>
            <View style={styles.bottom}>
              <EditProfile />
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
      backgroundColor: '#FFDE26',
    },
    center: {
      height: '10%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FEC100',
    },
    bottom: {
      height: '52%',
      backgroundColor: '#fff',
      flexDirection: 'row',
    },
    profileImg: {
      width: 140,
      height: 140,
      borderRadius: 70,
      borderWidth: 4,
      borderColor: '#fff',
      backgroundColor: '#eee',
    },
    greetingMsg: {
      textAlign: 'center',
      fontFamily: 'Marker Felt',
      fontSize: 24,
      fontStyle: 'italic',
      color: '#605F5D',
    },
});  

export default ProfileScreen;