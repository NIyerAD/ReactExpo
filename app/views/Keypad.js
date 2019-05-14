import React, { Component } from 'react';
import { Container, View, Text, Button } from 'native-base';
// import { Button } from 'react-native-elements'
import { StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export class Keypad extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberField: '07780687234'
        }
        this.call = this.call.bind(this);
        // this.renderKeypad = this.renderKeypad.bind(this);
    }

    componentDidMount = () => {
        // this.renderKeypad();
    }

    registerNumber = () => {
        console.log();
    }

    call = () => { }

    renderTop = () => {
        const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
        const topnums = [];
        for (index = 1; index < numbers.length + 1; index++) {
            topnums.push(
                // <Button style={style.keypad} key={index} id={index} onPress={this.registerNumber.bind(this, index)}>
                //     <Text style={style.keyText}>{index}</Text>
                // </Button>
            )
        }
        return topnums;
    }

    render() {
        let topnums = this.renderTop();
        return (
            <Container style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TextInput style={{ marginBottom: 20, fontSize: 40 }}>{this.state.numberField}</TextInput>
                <View style={{ alignItem: 'center', flexDirection: 'row', marginTop: 10 }} pointerEvents="auto">
                    <Button title={buttonObj.one} style={style.keypad} onPress={(event) => this.registerNumber(event)}>
                        <Text style={style.keyText}>1</Text>
                    </Button>
                    <Button style={style.keypad} onPress={(title) => this.registerNumber(title)}>
                        <Text style={style.keyText}>2</Text>
                    </Button>
                    <Button style={style.keypad} onPress={() => this.registerNumber()}>
                        <Text style={style.keyText}>3</Text>
                    </Button>
                </View>
                <View style={{ alignItem: 'center', flexDirection: 'row', marginTop: 10 }}>
                    <Button style={style.keypad} onPress={() => this.registerNumber()}>
                        <Text style={style.keyText}>4</Text>
                    </Button>
                    <Button style={style.keypad} onPress={() => this.registerNumber()}>
                        <Text style={style.keyText}>5</Text>
                    </Button>
                    <Button style={style.keypad} onPress={() => this.registerNumber()}>
                        <Text style={style.keyText} id="6">6</Text>
                    </Button>
                </View>
                <View style={{ alignItem: 'center', flexDirection: 'row', marginTop: 10 }}>
                    <Button style={style.keypad} onPress={() => this.registerNumber()}>
                        <Text style={style.keyText} id="7">7</Text>
                    </Button>
                    <Button style={style.keypad} onPress={() => this.registerNumber()}>
                        <Text style={style.keyText} id="8">8</Text>
                    </Button>
                    <Button style={style.keypad} onPress={() => this.registerNumber()}>
                        <Text style={style.keyText} id="9">9</Text>
                    </Button>
                </View>
                <View style={{ alignItem: 'center', flexDirection: 'row', marginTop: 10 }}>
                    <Button style={style.keypad} onPress={() => this.registerNumber()}>
                        <Text style={style.keyText} id="*">*</Text>
                    </Button>
                    <Button style={style.keypad} onPress={() => this.registerNumber()}>
                        <Text style={style.keyText} id="0">0</Text>
                    </Button>
                    <Button style={style.keypad} onPress={() => this.registerNumber()}>
                        <Text style={style.keyText} id="#">#</Text>
                    </Button>
                </View>
                <View style={{ alignItem: 'center', flexDirection: 'row', marginTop: 10 }}>
                    <View style={style.keypad}>
                        <Icon name="phone" style={{ color: 'green', fontSize: 20 }} />
                    </View>
                </View>
            </Container>
        )
    }
}

const style = StyleSheet.create({
    keypad: {
        marginLeft: 5,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 70,
        borderRadius: 140,
        backgroundColor: '#E1E2EF',
        fontSize: 10
    },

    keyText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 30
    }
});

const buttonObj = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    hash: "#",
    star: "*"
}
