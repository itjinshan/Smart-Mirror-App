import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'
import { Header } from 'react-native-elements';

class EditDisplayScreen extends Component {
    constructor() {
        super();
        this.state = {
            traffic: false,
            notification: false,
            email_Noti: false,
            reminder: false,
            news: false
        };
    }

    render() {
        return (
            <View>
                <View>
                <Header
backgroundColor= '#67baf6'
  centerComponent={{ text: 'Edit Display Setting', style: { color: '#fff' } }}

/>
                </View>
                <View >
                    <View style={styles.toggles}>
                        <Text style={styles.textStyle}>
                            Traffic
                        </Text>
                    <ToggleSwitch
                        isOn={this.state.traffic}
                        // label='Traffic'
                        labelStyle={{ color: 'black', fontWeight: '900',marginHorizontal: 20 }}
                        size='large'
                        onToggle={(isOn) => this.setState({ traffic: !this.state.traffic })}
                    />
                    </View>
                    <View style={styles.toggles}>
                        <Text style={styles.textStyle}>
                        Notification
                        </Text>
                        <ToggleSwitch
                        isOn={this.state.notification}
                        // label='Notification'
                        labelStyle={{ color: 'black', fontWeight: '900',marginHorizontal: 20 }}
                        size='large'
                        onToggle={(isOn) => this.setState({ notification: !this.state.notification })}
                    />
                    </View>
                    <View style={styles.toggles}>
                        <Text style={styles.textStyle}>
                            Email Notification
                        </Text>
                        <ToggleSwitch
                        isOn={this.state.email_Noti}
                        // label='Email Notification'
                        labelStyle={{ color: 'black', fontWeight: '900',marginHorizontal: 20 }}
                        size='large'
                        onToggle={(isOn) => this.setState({ email_Noti: !this.state.email_Noti })}
                    />
                    </View>
                    <View style={styles.toggles}>
                        <Text style={styles.textStyle}>
                            Reminder
                        </Text>
                        <ToggleSwitch
                        isOn={this.state.reminder}
                        // label='Reminder'
                        labelStyle={{ color: 'black', fontWeight: '900',marginHorizontal: 20 }}
                        size='large'
                        onToggle={(isOn) => this.setState({ reminder: !this.state.reminder })}
                    />
                    </View>
                    <View style={styles.toggles}>
                        <Text style={styles.textStyle}> 
                            News
                        </Text>
                        <ToggleSwitch
                        isOn={this.state.news}
                        // label='News'
                        labelStyle={{ color: 'black', fontWeight: '900',marginHorizontal: 20 }}
                        size='large'
                        onToggle={(isOn) => this.setState({ news: !this.state.news })}
                    />
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {

    },
    toggles:{
        padding:20,
        justifyContent:'center',
        alignItems:'center',
    },
    textStyle:{
     alignItems:'flex-start'   
    }
})

export default EditDisplayScreen;