import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Container } from 'native-base';
import { BarIndicator } from 'react-native-indicators';

export class LogoutModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    logout = () => {
        this.setState({
            loading: true
        });
        let that = this;
        setTimeout(function () {
            that.props.navigation.navigate('Login');
        }, 1000);
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>Do you wish to logout?</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Button onPress={() => this.props.navigation.goBack()} style={{ width: '20%', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Cancel</Text>
                    </Button>
                    <Button
                        onPress={() => this.logout()}
                        title="Logout"
                        style={{ marginLeft: 10, width: '20%', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Text>OK</Text>
                    </Button>
                </View>
                <Container style={{ position: 'absolute', bottom: 10, height: '20%', width: '50%' }}>
                    { this.state.loading &&
                        <BarIndicator color="#2D3547" count={6} />
                    }
                </Container>
                
            </View>
        )
    }
}