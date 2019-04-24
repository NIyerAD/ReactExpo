import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';

export class Contacts extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <ScrollView>
                {
                    contactList.map((l, i) => (
                        <ListItem key={i} title={l.name} subtitle={l.subtitle} />
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