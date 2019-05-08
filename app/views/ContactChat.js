import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Container, View, Text } from 'native-base';

export class ContactChat extends Component {
    constructor(props){
        super(props);
    }

    render(){

        const contactName = this.props.navigation.getParam('name');

        return(
            <Container style={{flex: 1, alignItem: 'center', justifyContent: 'center'}}>
                <Text style={{textAlign: "center"}}>Chat with {contactName} </Text>
            </Container>
        )
    }
}