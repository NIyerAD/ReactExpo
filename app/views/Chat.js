import React, { Component } from 'react';
import { Container, Text, Card, CardItem, Body, Header, Content } from 'native-base';

export class Chat extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const name = this.props.navigation.getParam('name');
        const number = this.props.navigation.getParam('number');
        return (
            <Container style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                
            </Container>
        )
    }
}