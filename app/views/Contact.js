import React, { Component } from 'react';
import { Text } from 'react-native-elements';
import { Container, Button, Footer } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export class Contact extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const {navigate} = this.props.navigation;
        const name = this.props.navigation.getParam('name');
        const number = this.props.navigation.getParam('number');

        return(
            <Container style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 30}}>{name}</Text>
                <Text style={{fontSize: 15}}>{number}</Text>
                <Button iconLeft rounded block light style={{width: '20%', alignSelf: 'center', marginTop: 10}}>
                    <Icon name="phone" style={{color: 'green', fontSize: 20}} />
                    <Text style={{paddingLeft: 5, fontSize: 15}}>Call</Text>
                </Button>
            </Container>
        )
    }
}