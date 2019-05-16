import React, { Component } from 'react';
import { Container, Content, Picker, Form, Header, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: ""
        }
    }

    getSelection = (value) => {
        this.setState({
            selected: value
        })
    }

    render() {
        return (
            <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Content>
                    <Text style={{ textAlign: 'center', fontSize }}>Settings</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 15, marginTop: 10 }}>Numeric Keyboard</Text>
                    <Form>
                        <Picker mode="dropdown"
                            iosHeader="Select type"
                            placeholder="Select your numeric keyboard type"
                            iosIcon={<Icon name="arrow-down" style={{ color: 'black', fontSize: 20 }} />}
                            selectedValue={this.state.selected}
                            onValueChange={this.getSelection.bind(this)}
                            style={{ width: '100%' }}
                        >
                            <Picker.Item label="Custom Keypad" value="key0" />
                            <Picker.Item label="Default iOS keypad" value="key1" />
                        </Picker>
                    </Form>
                </Content>
            </Container>
        )
    }
}
