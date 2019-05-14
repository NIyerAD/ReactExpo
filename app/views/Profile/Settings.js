import React, { Component } from 'react';
import { Text } from 'react-native-elements';
import { Container } from 'native-base';

export class Settings extends Component {

    render(){
        return(
            <Container style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text>Settings</Text>
            </Container>
        )
    }
}
