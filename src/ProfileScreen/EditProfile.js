import React, { Component } from 'react';
import {StyleSheet,
        Text,
        View,
        Button,
        Image,
        TextInput,
        ScrollView,
        Dimensions} from 'react-native';  

const { height } = Dimensions.get('window');

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screenHeight: 0,
            userName: 'Alex',
            displayingName: 'AJ',
            email: 'alex.jiang@sjsu.edu',
            dob: '01/24/1995',
            workAddress: '1 Washington Square San Jose, CA 95112',
            profileEditing: false,
        };
    }

    contentSizeChange = (contentHeight) => {
        this.setState({screenHeight: contentHeight});
    };

    render(){ 
        const scrollable = this.state.screenHeight > height*0.4;

        const editProfile = () => {
            this.setState({profileEditing:true});
        }
    
        const finishEditing = () => {
            this.setState({profileEditing:false});
        }
        return(
            <View style={{flex: 1}}>
                    <Text style={styles.Header}>Personal Information</Text>
                    {this.state.profileEditing === false ? (
                        <ScrollView style={{flex: 1}}
                                    contentContainerStyle={{flexGrow: 1}}
                                    scrollEnabled={scrollable}
                                    onContentSizeChange = {this.contentSizeChange}>
                        <View style={{marginHorizontal: 45}}>
                            <Button
                                onPress = {editProfile}
                                title = "Edit Profile"
                                color = "red"
                            />
                            <Text style={styles.InfoHeader}>Username:</Text>
                            <Text style={styles.InfoDisplay}>{this.state.userName}</Text>
                            <Text style={styles.InfoHeader}>Display Name:</Text>
                            <Text style={styles.InfoDisplay}>{this.state.displayingName}</Text>
                            <Text style={styles.InfoHeader}>Date of Birth:</Text>
                            <Text style={styles.InfoDisplay}>{this.state.dob}</Text>
                            <Text style={styles.InfoHeader}>Login Email:</Text>
                            <Text style={styles.InfoDisplay}>{this.state.email}</Text>
                            <Text style={styles.InfoHeader}>Work Address:</Text>
                            <Text style={styles.InfoDisplay}>{this.state.workAddress}</Text>
                        </View>
                        </ScrollView>
                    ):(
                        <ScrollView style={{flex: 1}}
                                    contentContainerStyle={{flexGrow: 1}}
                                    scrollEnabled={scrollable}
                                    onContentSizeChange = {this.contentSizeChange}>
                        <View style={{marginHorizontal: 45}}>
                            <Button
                                onPress = {finishEditing}
                                title = "Complete Editing"
                                color = "blue"
                            />
                            <Text style={styles.InfoHeader}>Username:</Text>
                            <TextInput
                                style={styles.InfoDisplay}
                                placeholder={this.state.userName}
                                onChangeText={(userName) => this.setState({userName})}
                            />
                            <Text style={styles.InfoHeader}>Display Name:</Text>
                            <TextInput
                                style={styles.InfoDisplay}
                                placeholder={this.state.displayingName}
                                onChangeText={(displayingName) => this.setState({displayingName})}
                            />
                            <Text style={styles.InfoHeader}>Date of Birth:</Text>
                            <TextInput
                                style={styles.InfoDisplay}
                                placeholder={this.state.dob}
                                onChangeText={(dob) => this.setState({dob})}
                            />
                            <Text style={styles.InfoHeader}>Login Email:</Text>
                            <TextInput
                                style={styles.InfoDisplay}
                                placeholder={this.state.email}
                                onChangeText={(email) => this.setState({email})}
                            />
                            <Text style={styles.InfoHeader}>Work Address:</Text>
                            <TextInput
                                style={styles.InfoDisplay}
                                placeholder={this.state.workAddress}
                                onChangeText={(workAddress) => this.setState({workAddress})}
                            />
                        </View>
                        </ScrollView>
                    )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Header: {
        marginLeft:10, 
        marginTop:10, 
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Marker Felt',
        lineHeight: 55,
    },
    InfoHeader: {
        textAlign: 'left',
        fontSize: 18,
        fontStyle: 'italic',
        lineHeight: 20,
    },
    InfoDisplay: {
        textAlign: 'center',
        fontFamily: 'Marker Felt',
        fontSize: 20,
        lineHeight: 35,
    },
})

export default EditProfile;