import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Picker } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'
import { Header } from 'react-native-elements';
import axios from 'axios';
import SocketIOClient from 'socket.io-client';

const socket = SocketIOClient('http://ec2-18-212-195-64.compute-1.amazonaws.com', { transports: [ 'websocket'] });

class EditDisplayScreen extends Component {
    constructor() {
        super();
        this.state = {
            WeatherConfig: "OFF",
            MapConfig: "OFF",
            NewsConfig: "OFF",
            DateConfig: "OFF",
            DeviceID: "9c:b6:d0:e6:ef:53"
        };

    }

    componentDidMount() {
        axios.get('http://ec2-18-212-195-64.compute-1.amazonaws.com/api/configDisplay', { params: { DeviceID: this.state.DeviceID } }).then(res => {
            this.setState(res.data);
        }).catch(err => { console.warn(err) })
    }

    
    onPress = () => {
        const configData = this.state
        axios.post('http://ec2-18-212-195-64.compute-1.amazonaws.com/api/changeConfig', { configData }).then(res => {
            if(res.data.code === 400){
                console.warn(res.data)
            }
        }).catch(err => { console.warn(err) })
        socket.emit('config:receive', { config: this.state });
        socket.on('config:send',(data)=>{console.warn(data)})
    }

    render() {
        return (
            <View>
                <View>
                    <Header
                        backgroundColor='#67baf6'
                        centerComponent={{ text: 'Edit Display Setting', style: { color: '#fff' } }}
                    />
                </View>

                <View >
                    <Text>WeatherConfig</Text>
                    <Picker
                        selectedValue={this.state.WeatherConfig}
                        style={{ height: 50, width: 300 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ WeatherConfig: itemValue })
                        }
                        
                        >
                        <Picker.Item label="OFF" value="OFF" />
                        <Picker.Item label="top-left" value="top-left" />
                        <Picker.Item label="top-middle" value="top-middle" />
                        <Picker.Item label="top-right" value="top-right" />
                    </Picker>
                    <Text>MapConfig</Text>
                    <Picker
                        selectedValue={this.state.MapConfig}
                        style={{ height: 50, width: 300 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ MapConfig: itemValue })
                        }
                        
                        >
                        <Picker.Item label="OFF" value="OFF" />
                        <Picker.Item label="bottom-left" value="bottom-left" />
                        <Picker.Item label="bottom-middle" value="bottom-middle" />
                        <Picker.Item label="bottom-right" value="bottom-right" />
                    </Picker>
                    <Text>NewsConfig</Text>
                    <Picker
                        selectedValue={this.state.NewsConfig}
                        style={{ height: 50, width: 300 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ NewsConfig: itemValue })
                        }
                        
                        >
                        <Picker.Item label="OFF" value="OFF" />
                        <Picker.Item label="middle-left" value="middle-left" />
                        <Picker.Item label="middle-right" value="middle-right" />
                    </Picker>
                    <Text>DateConfig</Text>
                    <Picker
                        selectedValue={this.state.DateConfig}
                        style={{ height: 50, width: 300 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ DateConfig: itemValue })
                        }
                        
                        >
                        <Picker.Item label="OFF" value="OFF" />
                        <Picker.Item label="top-left" value="top-left" />
                        <Picker.Item label="top-middle" value="top-middle" />
                        <Picker.Item label="top-right" value="top-right" />
                    </Picker>
                </View>
                <View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={()=>this.onPress()}
                        >
                        <Text> Submit </Text>
                        </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {

    },
    toggles: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        alignItems: 'flex-start'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
      }
})

export default EditDisplayScreen;