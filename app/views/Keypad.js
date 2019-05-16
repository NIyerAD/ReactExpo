import React, { Component } from 'react';
import { Container, View, Text, Button } from 'native-base';
import { StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native-gesture-handler';

const numCols = 3;
const numbers = [   { key: "1", number: "1" }, { key: "2", number: "2" }, { key: "3", number: "3" }, { key: "4", number: "4" }, { key: "5", number: "5" }, { key: "6", number: "6" }, 
                    { key: "7", number: "7" }, { key: "8", number: "8" }, { key: "9", number: "9" }, { key: "*", class: 'special' }, { key: "0", number: "0" }, 
                    { key: "#", class: "special" },{ key: "", class: "blank" }, { key: "phone" }, {  key: "remove" }
                ];


export class Keypad extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberField: [],
            // If text input field has content, render remove button
            hasContent: false,
            isCalling: false
        };

        this.call = this.call.bind(this);
    }

    registerNumber = (item) => {
        this.setState((state, props) => ({
            numberField: this.state.numberField + item
        }));
    }

    call = () => {
        console.log("Calling: ", this.state.numberField);
        console.log(this.state.numberField[4]);
    }
    
    removeNum = () => {
        this.setState({
            numberField: this.state.numberField.slice(0, -1)
        });
    }

    renderItem = ({ item }) => {
        return (
            <View style={{ alignItem: 'center', flexDirection: 'row', marginTop: 15 }}>
                    {
                        item.key === 'phone' &&
                        <Button style={style.callBtn} onPress={() => this.call()}>
                            <Icon name="phone" style={{ color: 'green', fontSize: 20 }} />
                        </Button>
                    }
                    {
                        item.key === 'remove' &&
                        <Button style={style.removeBtn} onPress={() => this.removeNum()}>
                            <Icon name="remove" style={{ fontSize: 20 }} />
                        </Button>
                    } 
                    {
                        item.number >= 0 &&
                        <Button style={style.keypad} onPress={() => this.registerNumber(item.key)}>
                            <Text style={style.keyText}>{item.key}</Text>
                        </Button>
                    } 
                    {
                        item.class === "special" &&
                        <Button style={style.keypad} onPress={() => this.registerNumber(item.key)}>
                            <Text style={style.keyText}>{item.key}</Text>
                        </Button>
                    }
                    {
                        item.key === "" &&
                        <Button style={style.hidden}>
                            <Text></Text>
                        </Button>
                    }  
            </View>
        )
    };

    render() {
        return (
            <Container style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TextInput style={{ marginTop: 20, fontSize: 40 }}>{this.state.numberField}</TextInput>
                <FlatList data={numbers} renderItem={this.renderItem} numColumns={numCols} />
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
    hidden: {
        marginLeft: 5,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 70,
        borderRadius: 140,
        backgroundColor: 'white',
        fontSize: 10
    },
    callBtn: {
        marginLeft: 5,
        marginRight: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 70,
        borderRadius: 140,
        backgroundColor: '#E1E2EF',
        fontSize: 10
    },
    removeBtn: {
        marginLeft: 5,
        marginRight: 10,
        marginBottom: 10,
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