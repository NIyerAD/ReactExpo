import React, { Component } from 'react';
import { Alert, StyleSheet, View, Image, KeyboardAvoidingView, Text } from 'react-native';
import { Input, Button, FormInput } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';


export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            host: [],
            isLoggedIn: false,
            username: null,
            password: null
        };

        this.updateHost = this.updateHost.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleHostChange = this.handleHostChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        
    }
    
    updateHost = (host) => {
        this.setState({ host: host })
    }

    handleUsername = (username) => {
        this.setState({username});
    }

    handlePassword = (password) => {
        this.setState({password});
    }

    handleHostChange = (event) => {
        console.log("host selected");
    }

    handleSubmit = (props) => {
        console.log("Username: ", this.state.username, "/ Password: ", this.state.password);
        if((this.state.username !== "naren.iyer") && (this.state.password !== "test")){
            Alert.alert("Access Denied", "Incorrect username or password");
        }
        else {
            this.props.navigation.navigate('Home');
        }
    }

    render() {
        let logo = require('../../assets/logo.png');
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
                {/* <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.companyLogo} resizeMode="contain"/>
                </View> */}
                <View style={styles.logoContainer}>
                    <Text style={{color: '#fff', fontSize: 60}}>Test App</Text>
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
                        value={this.state.username}
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
                        leftIcon={
                            <Icon
                                name='lock'
                                size={25}
                                color='white'
                            />
                        }
                    />
                    <Button title="Login" buttonStyle={styles.loginButton} onPress={() => this.handleSubmit()}/>
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
    // companyLogo: {
    //     width: 250,
    //     height: 70
    // },
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