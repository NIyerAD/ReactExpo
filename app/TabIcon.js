import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from 'native-base';

export class TabIcon extends Component {
    render(){
        const color = this.props.selected ? 'blue' : '#fff';

        return(
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', alignSelf: 'center', justifyContent: 'center'}}>
                <Icon style={{color: color}} name={this.props.iconName} size={20} />
            </View>
        )
    }
}