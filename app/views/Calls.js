import React, { Component } from 'react';
import { Container, Text } from 'native-base';

export class Calls extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Text>Call Screen</Text>
            </Container>
        )
    }
}