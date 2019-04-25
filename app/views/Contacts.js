import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';

export class Contacts extends Component {
    constructor(props) {
        super(props);

        this.getName = this.getName.bind(this);
    }

    getName(item){
        console.log(item.name, "-", item.subtitle);
    }

    render() {
        return (
            <ScrollView>
                {
                    contactList.map((item, index) => (
                        <ListItem key={index} title={item.name} subtitle={item.subtitle}
                        containerStyle={{borderWidth: 0.5, borderStyle: 'solid' }} onPress={() => this.getName(item)} chevron/>
                    ))
                }
            </ScrollView>
        )
    }
}

const contactList = [
    {
        name: 'John Smith',
        subtitle: 'Director'
    },
    {
        name: 'Ali Jones',
        subtitle: 'Director'
    },
    {
        name: 'Jane Goodall',
        subtitle: 'Director'
    },
    {
        name: 'Samir Sam',
        subtitle: 'Admin'
    },
    {
        name: 'Jessica Jones',
        subtitle: 'Admin'
    },
    {
        name: 'Luke Cage',
        subtitle: 'Operations'
    },
    {
        name: 'Bob Bobson',
        subtitle: 'Operations'
    },
    {
        name: 'Chris Christophersen',
        subtitle: 'Sales'
    },
    {
        name: 'Ellie Ellison',
        subtitle: 'Sales'
    },
    {
        name: 'Ellie Ellison',
        subtitle: 'Sales'
    },
    {
        name: 'Ellie Ellison',
        subtitle: 'Sales'
    },
    {
        name: 'Ellie Ellison',
        subtitle: 'Sales'
    },
    {
        name: 'Ellie Ellison',
        subtitle: 'Sales'
    },
]