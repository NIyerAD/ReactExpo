import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export class History extends Component {
    constructor(props){
        super(props);

        this.getNumber = this.getNumber.bind(this);
    }

    getNumber(item){
        console.log(item.outbound);
    }

    render(){
        return(
            <ScrollView>
                {
                    historyEntries.map((item, index) => (
                        <ListItem key={index} title={item.outbound} 
                        containerStyle={{borderWidth: 0.5, borderStyle: 'solid' }} 
                        onPress={() => this.getNumber(item)} 
                        leftIcon={<Icon name="phone" style={{color: item.colour, fontSize: 20}} />}/>
                    ))
                }
            </ScrollView>
        )
    }
}

const historyEntries = [
    {
        outbound: '07789521321',
        colour: 'red'
    },
    {
        outbound: '03298432654',
        colour: 'green'
    },
    {
        outbound: '07789521321',
        colour: 'green'
    },
    {
        outbound: '07735789146',
        colour: 'grey'
    },
    {
        outbound: '01297432164',
        colour: 'red'
    },
    {
        outbound: '08341987423',
        colour: 'red'
    },
    {
        outbound: '02393487333',
        colour: 'green'
    },
    {
        outbound: '07789521321',
        colour: 'red'
    },
    {
        outbound: '02393487333',
        colour: 'grey'
    },
    {
        outbound: '07789521321',
        colour: 'red'
    },
    {
        outbound: '08341987423',
        colour: 'red'
    },
    {
        outbound: '07789521321',
        colour: 'grey'
    },
    {
        outbound: '08341987423',
        colour: 'green'
    },
]