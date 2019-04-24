import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator, createTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { Login } from './app/views/Login';
import { Home } from './app/views/Home';
import { Contacts } from './app/views/Contacts';
import { History } from './app/views/History'

const AppNav = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
  },
  {
    initialRouteName: 'Login'
  },
  
);

// const HomeNav = createTabNavigator(
//   {
//     Contacts: {
//       screen: Contacts
//     },
//     Directory: {
//       screen: History
//     }
//   },
//   {
//     initialRouteName: 'Contacts'
//   }
// );

// const ProfileNav = createDrawerNavigator(
//   {
//     Settings: {
//       screen: Settings
//     }
//   }
// );

const AppContainer = createAppContainer(AppNav);

export default class App extends Component {
  render() {
    
    return (
        <AppContainer navigate = {this.props.navigation}/>
        // <Home />
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});