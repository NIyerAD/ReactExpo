import React, { Component } from 'react';
import { Container, Button, View } from 'native-base';
import { Text } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export class Keypad extends Component {
    constructor(props){
        super(props);

        this.registerNumber = this.registerNumber.bind(this);
    }

    registerNumber(event){
        console.log(event.target.id);
    }

    render() {
        return (
            <Container style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                <View style={{ alignItem: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <View style={style.keypad}>
                        <Text style={{ textAlign: 'center' }}>1</Text>
                    </View>
                    <View style={style.keypad}>
                        <Text style={{ textAlign: 'center' }}>2</Text>
                    </View>
                    <View style={style.keypad}>
                        <Text style={{ textAlign: 'center' }}>3</Text>
                    </View>
                </View>
                <View style={{ alignItem: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <View style={style.keypad}>
                        <Text style={{ textAlign: 'center' }}>4</Text>
                    </View>
                    <View style={style.keypad}>
                        <Text style={{ textAlign: 'center' }}>5</Text>
                    </View>
                    <View style={style.keypad}>
                        <Text style={{ textAlign: 'center' }}>6</Text>
                    </View>
                </View>
                <View style={{ alignItem: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <View style={style.keypad}>
                        <Text style={{ textAlign: 'center' }}>7</Text>
                    </View>
                    <View style={style.keypad}>
                        <Text style={{ textAlign: 'center' }}>8</Text>
                    </View>
                    <View style={style.keypad}>
                        <Text style={{ textAlign: 'center' }}>9</Text>
                    </View>
                </View>
                <View style={{ alignItem: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <View style={style.keypad}>
                        <Text style={{ textAlign: 'center' }}>*</Text>
                    </View>
                    <View style={style.keypad}>
                        <Text style={{ textAlign: 'center' }}>0</Text>
                    </View>
                    <View style={style.keypad}>
                        <Text style={{ textAlign: 'center' }}>#</Text>
                    </View>
                </View>
                <View style={{ alignItem: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <View style={style.keypad}>
                        <Icon name="phone" style={{color: 'green', fontSize: 20}} />
                    </View>
                </View>
            </Container>
        )
    }
}

const style = StyleSheet.create({
    keypad: {
        marginLeft: 5,
        alignItems: 'center', 
        justifyContent: 'center', 
        height: 70, 
        width: 70, 
        borderRadius: 140, 
        backgroundColor: 'grey',
        fontSize: 10
    }
})
