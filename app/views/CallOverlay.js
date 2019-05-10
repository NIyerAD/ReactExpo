import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Overlay, Button, Text } from 'react-native-elements';
import { Container } from 'native-base';

export class CallOverlay extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Overlay isVisible={this.props.inboundCall} style={styles.overlay}>
                    <Text>Incoming Call</Text>
                    <Button><Text>Answer</Text></Button>
                    <Button><Text>Decline</Text></Button>
            </Overlay>
        )
    }
}

const styles = StyleSheet.create({
    overlay: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        opacity: 0.5
    }
})