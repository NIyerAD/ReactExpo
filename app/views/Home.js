import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Text, TextInput, Image } from 'react-native';
import { TabNavigator } from "react-navigation";
import { Header, Left, Right, Body, Container, Button, Content, Footer, FooterTab, Title } from 'native-base';
// import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Directory } from './Directory';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
        this.openNav = this.openNav.bind(this);

    }

    openNav() {
        this.setState(prevState => ({
            isNavOpen: !prevState.isNavOpen
        }));
        console.log("Nav opened: ", this.state.isNavOpen);
    }

    render() {
        return (
            // <View style={styles.container}>
            <Container>
                {/* <Header
                    containerStyle={{backgroundColor: '#2D3547', height: 80}}
                    centerComponent={{ text: 'Evolution', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'account-circle', onPress: (this.openNav), color: '#fff', size: 35  }}
                /> */}
                <Header style={{backgroundColor: '#2D3547'}}>
                    <Left>

                    </Left>
                    <Body>
                        <Title style={{color: '#fff'}}>Evolution</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={this.openNav}>
                            <Icon name='user' style={{fontSize: 25, color: '#fff'}} />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Contacts />
                </Content> 
                <Footer style={{ backgroundColor: '#2D3547' }}>
                    <FooterTab>
                        <Button>
                            <Icon name="users" style={{ fontSize: 20, color: '#fff' }} />
                            <Text style={{ color: '#fff' }}>Contacts</Text>
                        </Button>
                        <Button>
                            <Icon name="history" style={{ fontSize: 20, color: '#fff' }} />
                            <Text style={{ color: '#fff' }}>History</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
            // </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#63B0CD',
        // #2D3547
    },
    companyLogo: {
        width: 20
    },
    collapse: {
        marginTop: 20,
        marginLeft: 10,
        width: 40,
        height: 40,
    },
    navText: {
        textAlign: 'center',
        marginTop: 50,
        color: 'red'
    }
})