import React, { Component } from 'react';
import { Text } from 'react-native-elements';
import { View } from 'react-native';
import { Accordion, Container, Content, Button, Header } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        // Fetches props from parent component
        const name = this.props.navigation.getParam('name');
        const number = this.props.navigation.getParam('number');

        return (
            <Container style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>{name}</Text>
                <Text style={{ fontSize: 15 }}>{number}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Button iconLeft rounded block light style={{ width: '20%', alignSelf: 'center', marginTop: 10, marginLeft: 10 }}>
                        <Icon name="phone" style={{ color: 'green', fontSize: 20 }} />
                        <Text style={{ paddingLeft: 5, fontSize: 15 }}>Call</Text>
                    </Button>
                    <Button iconLeft rounded block light style={{ alignSelf: 'center', marginTop: 10, marginLeft: 10 }} 
                                onPress={() => this.props.navigation.navigate('ContactChat', {
                                    name: name,
                                    number: number
                                })}>
                        <Icon name="comments" style={{ color: 'green', fontSize: 20, paddingLeft: 5 }} />
                        <Text style={{ paddingLeft: 5, fontSize: 15, paddingRight: 5 }}>Chat</Text>
                    </Button>
                </View>
                <Container style={{width: '100%'}}>
                    <Content>
                        <Accordion dataArray={data} expanded={0} />
                    </Content>
                </Container>
            </Container>
        )
    }
}

const data = [{title: "Line 1", content: "Line 1 content" }];