import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Login } from './app/views/Login';
import { Home } from './app/views/Home';
import { Contacts } from './app/views/Contacts';
import { History } from './app/views/History';
import { createDrawerNavigator, createSwitchNavigator, createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Header, Left, Right, Body, Container, Button, Content, Footer, FooterTab, Title, List, ListItem } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
};

export default App;

const HomeTabNavigator = createBottomTabNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="users" size={20} color="#fff" />
      )
    }
  },
  History: {
    screen: History,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="history" size={20} color="#fff" />
      )
    }
  }
}, {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index]
      return {
        headerTitle: routeName,
      }
    },
    tabBarOptions: {
      style: {
        backgroundColor: '#2D3547'
      }
    }
  });

const HomeStackNavigator = createStackNavigator({
  HomeTabNavigator: HomeTabNavigator
}, {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerTitleStyle: {
          color: '#fff'
        },
        headerStyle: {
          backgroundColor: '#2D3547'
        },
        headerRight: (
          <Icon name="user" style={{ fontSize: 25, paddingRight: 10, color: '#fff' }} onPress={() => navigation.openDrawer()} />
        )
      }
    }
  });

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStackNavigator
    }
  },
  {
    contentComponent: props =>
      <Container>
        <Header>
          <Body>
            <Title>Profile</Title>
          </Body>
        </Header>
        <Content>
          <List>
            <ListItem>
                <Text>Settings</Text>
            </ListItem>
            <ListItem>
                <Text>Logout</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
  },
  {
    drawerPosition: "right",
    drawerWidth: 180
  });

const AppSwitchNavigator = createSwitchNavigator({
  Login: { screen: Login },
  Home: { screen: AppDrawerNavigator },
  // Settings: {screen}
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})