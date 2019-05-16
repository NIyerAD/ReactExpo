import React, { Component } from 'react';
import { View, Text, Button } from 'native-base';
import { Modal, TouchableHighlight, StyleSheet } from 'react-native';
import { Calls } from './Calls';

export class Test extends Component {
    constructor(props){
        super(props);

        this.state = {
            modalVisible: false,
            calls: [],
            isActive: true
        }
    }

    openModal = () => {
        this.setState({
            modalVisible: true
        })
    }

    closeModal = () => {
        this.setState({
            modalVisible: false
        })
    }
    render() {
        return (
            <View style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', borderTopWidth: 1, borderColor: 'black'}} >
                <Modal style={styles.modalContent} animationType="slide" transparent={false} visible={this.state.modalVisible} onRequestClose={() => null}>
                    <Text style={{textAlign: 'center', marginTop: 100}}>Call Stack</Text>
                        <Calls />
                    <TouchableHighlight style={{justifyContent: 'center', alignItems: 'center' }} onPress={() => this.closeModal()}>
                        <Text>Hide Modal</Text>
                    </TouchableHighlight>
                </Modal>
                <TouchableHighlight onPress={() => this.openModal()}>
                    <Text>Active Calls</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    modalContent: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0
    },
});