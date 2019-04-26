import React, { Component } from 'react';
import { View, Text } from 'react-native-elements';
import { Container } from 'native-base';

export class Settings extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text>Settings</Text>
            </Container>
        )
    }
}
