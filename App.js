import React, { Component } from 'react';
import { NetInfo, Platform, StyleSheet, Text, View } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';
import { Directory } from './app/views/Directory';
import { Contact } from './app/views/Contact';
import { History } from './app/views/History';
import { TabIcon } from './app/TabIcon';
import { Login } from './app/views/Login';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isNetworkDown: false,
    };
  }

  componentWillMount = () => {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityCheck);
  }

  componentDidMount = () => {
    Platform.OS === 'ios' ? console.log('iOS') : console.log('Android');

    NetInfo.getConnectionInfo().then((connectionInfo) => {
      console.log(
        'Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType,
      );
    });
  }

  componentWillUnmount = () => {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityCheck);
  }

  handleConnectivityCheck = () => {
    NetInfo.getConnectionInfo().then((connectionInfo) => {

      if (connectionInfo.type === 'none') {
        this.setState({ isNetworkDown: true });
      }
      else {
        this.setState({ isNetworkDown: false });
      }
    });
  }

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="login" component={Login}></Scene>
          <Scene key="contact" component={Contact} />
          <Scene key="tabbar" tabs tabBarStyle={{ backgroundColor: '#2D3547' }} >
            <Scene key="directory" icon={TabIcon} iconName="address-book" component={Directory} title="Directory" intial />
            <Scene key="history" icon={TabIcon} iconName="history" component={History} title="History" />
          </Scene>
        </Scene>
      </Router>
    );
  }
};

export default App;