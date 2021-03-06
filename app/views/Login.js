import React, { Component } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';


export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            host: [],
            isLoggedIn: false
        };

        this.updateHost = this.updateHost.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleHostChange = this.handleHostChange.bind(this);

        
    }
    
    updateHost = (host) => {
        this.setState({ host: host })
    }

    handleUsername = (event) => {
        console.log("Username: ", event.target.value);
    }

    handlePassword = (event) => {
        console.log("Password: ", event.target.value)
    }

    handleHostChange = (event) => {
        console.log("host selected");
    }

    render() {
        let logo = require('../../assets/logo.png');
        // const username; 
        // const password;
        const placeholder = {
            label: 'Select a host',
            value: null,
        }
        const hostnames = [
            {
                label: 'https://demo.aerial-direct.co.uk',
                value: 'Demo'
            },
            {
                label: 'https://pabx.aerial-direct.co.uk',
                value: 'Live'
            }
        ]

        const {navigate} = this.props.navigation;

        return (
            <KeyboardAvoidingView style={styles.loginContainer} behavior="padding">
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.companyLogo} />
                </View>
                <View style={{ flex: 2 }}>
                    <View style={styles.pickerContainer}>
                        <RNPickerSelect items={hostnames} placeholder={placeholder} onValueChange={this.handleHostChange} />
                    </View>
                    <Input
                        inputStyle={styles.inputFields}
                        placeholderTextColor={"white"}
                        inputContainerStyle={{ borderRadius: 30, marginTop: 20 }}
                        placeholder='Username'
                        onChangeText={this.handleUsername}
                        leftIcon={
                            <Icon
                                name='user'
                                size={25}
                                color='white'
                            />
                        }
                    />
                    <Input
                        placeholder='Password'
                        secureTextEntry={true}
                        inputStyle={styles.inputFields}
                        onChangeText={this.handlePassword}
                        placeholderTextColor={"white"}
                        inputContainerStyle={{ borderRadius: 30, marginTop: 20 }}
                        inputTy
                        leftIcon={
                            <Icon
                                name='lock'
                                size={25}
                                color='white'
                            />
                        }
                    />
                    <Button title="Login" buttonStyle={styles.loginButton} onPress={() => this.props.navigation.navigate('Home')}/>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    logoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 80
    },
    companyLogo: {
        width: 250,
        height: 70
    },
    loginContainer: {
        backgroundColor: '#2D3547',
        height: '100%'
    },
    inputFields: {
        marginLeft: 20,
        color: '#fff'
    },
    loginButton: {
        width: '80%',
        marginTop: 30,
        marginLeft: 30,
        borderRadius: 30
    },
    pickerContainer: {
        fontSize: 16,
        width: '80%',
        marginLeft: 30,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    }
})