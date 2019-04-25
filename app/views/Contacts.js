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
        console.log(item.name, "-", item.subtitle, "phone: ", item.number);
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
        subtitle: 'Director',
        number: '07789521321'
    },
    {
        name: 'Ali Jones',
        subtitle: 'Director',
        number: '03298432654'
    },
    {
        name: 'Jane Goodall',
        subtitle: 'Director',
        number: '07735789146'
    },
    {
        name: 'Samir Sam',
        subtitle: 'Admin',
        number: '01297432164'
    },
    {
        name: 'Jessica Jones',
        subtitle: 'Admin',
        number: '08341987423'
    },
    {
        name: 'Luke Cage',
        subtitle: 'Operations',
        number: '02393487333'
    },
    {
        name: 'Bob Bobson',
        subtitle: 'Operations',
        number: '09821564327'
    },
    {
        name: 'Chris Christophersen',
        subtitle: 'Sales',
        number: '08853241543'
    },
    {
        name: 'Ellie Ellison',
        subtitle: 'Sales',
        number: '06782364590'
    },
    {
        name: 'Jen Johnson',
        subtitle: 'Sales',
        number: '07771865421'
    },
    {
        name: 'Olaf Olafssen',
        subtitle: 'Sales',
        number: '07654123456'
    },
    {
        name: 'Billy Bobson',
        subtitle: 'Sales',
        number: '07652444999'
    },
    {
        name: 'Dom Donner',
        subtitle: 'Sales',
        number: '03336487632'
    },
]