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

    registerNumber(){
        console.log('button pressed');
    }

    render() {
        return (
            <Container style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} id="keypadbtns">
                <View style={{ alignItem: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <Button id="1" style={style.keypad} onPress={() => {this.registerNumber()}}>
                        <Text style={{ textAlign: 'center' }}>1</Text>
                    </Button>
                    <Button id="2" style={style.keypad} onPress={() => {this.registerNumber()}}>
                        <Text style={{ textAlign: 'center' }} id="2" >2</Text>
                    </Button>
                    <Button style={style.keypad}>
                        <Text style={{ textAlign: 'center' }} id="3">3</Text>
                    </Button>
                </View>
                <View style={{ alignItem: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <Button style={style.keypad} onPress={(event) => {this.registerNumber()}}>
                        <Text style={{ textAlign: 'center' }} id="4">4</Text>
                    </Button>
                    <Button style={style.keypad} onPress={(event) => {this.registerNumber()}}>
                        <Text style={{ textAlign: 'center' }} id="5">5</Text>
                    </Button>
                    <Button style={style.keypad} onPress={(event) => {this.registerNumber()}}>
                        <Text style={{ textAlign: 'center' }} id="6">6</Text>
                    </Button>
                </View>
                <View style={{ alignItem: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <Button style={style.keypad} onPress={(event) => {this.registerNumber()}}>
                        <Text style={{ textAlign: 'center' }} id="7">7</Text>
                    </Button>
                    <Button style={style.keypad} onPress={(event) => {this.registerNumber()}}>
                        <Text style={{ textAlign: 'center' }} id="8">8</Text>
                    </Button>
                    <Button style={style.keypad} onPress={(event) => {this.registerNumber()}}>
                        <Text style={{ textAlign: 'center' }} id="9">9</Text>
                    </Button>
                </View>
                <View style={{ alignItem: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <Button style={style.keypad} onPress={(event) => {this.registerNumber()}}>
                        <Text style={{ textAlign: 'center' }} id="*">*</Text>
                    </Button>
                    <Button style={style.keypad} onPress={(event) => {this.registerNumber()}}>
                        <Text style={{ textAlign: 'center' }} id="0">0</Text>
                    </Button>
                    <Button style={style.keypad} onPress={(event) => {this.registerNumber()}}>
                        <Text style={{ textAlign: 'center' }} id="#">#</Text>
                    </Button>
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
