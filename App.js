import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Login } from './app/views/Login';
import { Home } from './app/views/Home';
import { Directory } from './app/views/Directory';
import { History } from './app/views/History';
import { Keypad } from './app/views/Keypad';
import { Chat } from './app/views/Chat';
import { Settings } from './app/views/Profile/Settings';
import { createDrawerNavigator, createSwitchNavigator, createAppContainer, createBottomTabNavigator, createStackNavigator, DrawerItems } from 'react-navigation';
import { Header, Left, Right, Body, Container, Button, Content, Footer, FooterTab, Title, List, ListItem } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Contact } from './app/views/Contact';
import { Calls } from './app/views/Calls';

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <AppContainer />
    );
  }
};

export default App;

// Tab navigator

const HomeTabNavigator = createBottomTabNavigator({
  Directory: {
    screen: Directory,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="address-book" size={20} color="#fff" />
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
  },
  Chat: {
    screen: Chat,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="comments" size={20} color="#fff"/>
      )
    }
  },
  Keypad: {
    screen: Keypad,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="th" size={20} color="#fff" />
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
        backgroundColor: '#2D3547',
      },
      inactiveTintColor: '#fff',
    }
});

// Navigator that contains top bar
const HomeStackNavigator = createStackNavigator({
  HomeTabNavigator: HomeTabNavigator,
  Settings: {screen: Settings},
  Contact: {screen: Contact}
}, {
    navigationOptions: {
      // Hide 'Home' route from drawer nav
      drawerLabel: () => null
    },
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
      screen: HomeStackNavigator,
      
    },
    Settings: {
      screen: Settings
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
          <DrawerItems {...props} />
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