import React, { Component } from 'react';
import { FlatList, View, TouchableHighlight } from 'react-native';
import { Container, Text, Card, CardItem, Body, Header, Content, ListItem } from 'native-base';

export class Chat extends Component {
    constructor(props) {
        super(props);

        this.renderItem = this.renderItem.bind(this);
    }

    renderItem = (item) => {
        <View>
            <Text style={{ fontSize: 15 }}>{item.name}</Text>
            <Text>{item.subtitle}</Text>
        </View>
    }

    render() {
        const name = this.props.navigation.getParam('name');
        const number = this.props.navigation.getParam('number');
        return (
            <FlatList
                data={chatList}
                // renderItem={({ item }) =>
                //     <TouchableHighlight>
                //         <View style={{}}>
                //             <Text style={{ fontSize: 15 }}>{item.name}</Text>
                //             <Text>{item.subtitle}</Text>
                //         </View>
                //     </TouchableHighlight>
                // }
                renderItem={this.renderItem}
            />
        )
    }
}

const chatList = [
    {
        key: 'john',
        name: 'John',
        subtitle: 'Send a message!'
    },
    {
        key: 'paul',
        name: 'Paul',
        subtitle: 'Send a message!'
    },
    {
        key: 'george',
        name: 'George',
        subtitle: 'Send a message!'
    },
    {
        key: 'ringo',
        name: 'Ringo',
        subtitle: 'Send a message!'
    },
    {
        key: 'rob',
        name: 'Robert',
        subtitle: 'Send a message!'
    },
    {
        key: 'cat',
        name: 'Cat',
        subtitle: 'Send a message!'
    },
    {
        key: 'steve',
        name: 'Stevie',
        subtitle: 'Send a message!'
    },
    {
        key: 'keith',
        name: 'Keith',
        subtitle: 'Send a message!'
    },
    {
        key: 'jim',
        name: 'Jimi',
        subtitle: 'Send a message!'
    },
    {
        key: 'jack',
        name: 'Jack',
        subtitle: 'Send a message!'
    },
    {
        key: 'kyle',
        name: 'Kyle',
        subtitle: 'Send a message!'
    },
    {
        key: 'pete',
        name: 'Pete',
        subtitle: 'Send a message!'
    },
    {
        key: 'roger',
        name: 'Roger',
        subtitle: 'Send a message!'
    },
    {
        key: 'jane',
        name: 'Jane',
        subtitle: 'Send a message!'
    },
    {
        key: 'jill',
        name: 'Jill',
        subtitle: 'Send a message!'
    },
    {
        key: 'karen',
        name: 'Karen',
        subtitle: 'Send a message!'
    }
]