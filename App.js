import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Login} from './app/views/Login';
import { Home } from './app/views/Home';
import { Contacts } from './app/views/Contacts';
import { History } from './app/views/History';
import { createDrawerNavigator, createSwitchNavigator, createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

class App extends Component {
  render() {
    return (
        <AppContainer />
    );
  }
};

export default App;

const HomeTabNavigator = createBottomTabNavigator({
  Contacts,
  History
});

const HomeStackNavigator = createStackNavigator({
  HomeTabNavigator: HomeTabNavigator
});

const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStackNavigator
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Login: {screen: Login},
  Home: {screen: AppDrawerNavigator}
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})