import React, { Component } from 'react';
import { Container, View, Text, Button } from 'native-base';
// import { Button } from 'react-native-elements'
import { StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native-gesture-handler';


const numCols = 3;
const numbers = [{key: "1"}, {key: "2"}, {key: "3"}, {key: "4"}, {key: "5"}, {key: "6"}, {key: "7"}, {key: "8"}, {key: "9"}, {key: "*"}, {key: "0"}, {key: "#"}];

export class Keypad extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberField: ''
        }
        this.call = this.call.bind(this);
    }

    registerNumber = (item) => {
        this.setState({
            numberField: this.state.numberField + item
        })
    }

    call = () => { }
    
    renderItem = ({item, index}) => {
        return (
            <View style={{ alignItem: 'center', flexDirection: 'row', marginTop: 20 }} pointerEvents="auto">
                <Button style={style.keypad} onPress={() => this.registerNumber(item.key)}>
                    <Text style={style.keyText}>{item.key}</Text>
                </Button>
            </View>
        )
    };

    render() {
        return (
            <Container style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TextInput style={{ marginTop: 20, fontSize: 40 }}>{this.state.numberField}</TextInput>
                <FlatList data={numbers} renderItem={this.renderItem} numColumns={numCols}/>
                <View style={{height: 70, width: 70, justifyContent: 'center', alignItems: 'center', marginBottom: 5, borderRadius: 140, backgroundColor: '#E1E2EF'}}>
                    <Icon name="phone" style={{ color: 'green', fontSize: 20 }} />
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
