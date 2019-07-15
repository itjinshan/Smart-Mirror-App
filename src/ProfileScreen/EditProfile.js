import React, { Component } from 'react';
import {StyleSheet,
        Text,
        View,
        Button,
        Image,
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
        };
    }

    contentSizeChange = (contentWidth, contentHeight) => {
        this.setState({screenHeight: contentHeight});
    };

    render(){ 
        const scrollable = this.state.screenHeight > height;
        return(
            <View style={{flex: 1}}>  
                <ScrollView style={{flex: 1}}
                            contentContainerStyle={{flexGrow: 1}}
                            scrollEnabled={scrollable}
                            onContentSizeChange = {this.contentSizeChange}>
                    <Text style={styles.Header}>Personal Information</Text>
                    <View style={{marginHorizontal: 45}}>
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
        lineHeight: 35,
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