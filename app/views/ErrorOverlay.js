import React, { Component } from 'react';
import { Overlay, Text } from 'react-native-elements';

export class ConnectionError extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Overlay width="auto" height="auto" isVisible={this.props.networkErr}>
                <Text style={{justifyContent: 'center', alignItems: 'center'}}>Cannot connect to network. Application will be disabled until network connection is established</Text>
            </Overlay>
        )
    }
}