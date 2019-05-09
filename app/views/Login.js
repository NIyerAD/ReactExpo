import React, { Component } from 'react';
import { Alert, StyleSheet, View, Image, KeyboardAvoidingView, Text } from 'react-native';
import { Input, Button, FormInput } from 'react-native-elements';
import { Container, Content, Spinner } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedHost: null,
            isLoggedIn: false,
            username: null,
            password: null,
            loading: false
        };

        this.handleUsername = this.handleUsername.bind(this);
        this.handleHostChange = this.handleHostChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleUsername = (username) => {
        this.setState({username});
    }

    handlePassword = (password) => {
        this.setState({password});
    }

    handleHostChange = (value) => {
        this.setState({selectedHost: value});
    }

    handleSubmit = () => {
        this.setState({loading: true});
        // set that = this or bind the function in the timeout
        let that = this;
        setTimeout(function(){
            that.props.navigation.navigate('Home');
        }, 1000);
        
    }

    componentWillUnmount = () => {
        this.setState({loading: false});
    }

    render() {
        const placeholder = {
            label: 'Select a host',
            value: null,
        }
        const hostnames = [
            {
                label: 'https://demo.test.co.uk',
                value: 'https://demo.test.co.uk'
            },
            {
                label: 'https://pabx.test.co.uk',
                value: 'https://pabx.test.co.uk'
            }
        ]

        const {navigate} = this.props.navigation;

        return (
            <KeyboardAvoidingView style={styles.loginContainer} behavior="padding">
                <View style={styles.logoContainer}>
                    <Text style={{color: '#fff', fontSize: 60}}>Test App</Text>
                </View>
                <View style={{ flex: 2 }}>
                    <View style={styles.pickerContainer}>
                        <RNPickerSelect items={hostnames} placeholder={placeholder} onValueChange={value => this.handleHostChange(value)} />
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
                    <Button title="Login" loading={this.state.loading} buttonStyle={styles.loginButton} onPress={() => this.handleSubmit()}/>
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