import React, { Component } from 'react';
import { View, Text, Button } from 'native-base';
import  SlidingUpPanel from 'rn-sliding-up-panel';

export class Test extends Component {
    render() {
        return (
            // <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
            //     <Button title='Show panel' onPress={() => this._panel.show()}>
            //         <Text>Show panel</Text>
            //     </Button>
            //     <SlidingUpPanel ref={c => this._panel = c}>
            //         <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
            //             <Text>Here is the content inside panel</Text>
            //             <Button title='Hide' onPress={() => this._panel.hide()} />
            //         </View>
            //     </SlidingUpPanel>
            // </View>
            <View>
                <Text>Hello, World</Text>
            </View>
        )
    }
}