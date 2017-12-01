import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Fab, View} from 'native-base';

export default class AppTemplate extends Component {
  goToAddPage() {
    this.props.navigation.navigate('AddToDo');
    console.log('add to do!', this.props)
  }

  render() {
    return (
      <Image
      style={{
            backgroundColor: '#ccc',
            flex: 1,
            position: 'absolute',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
          }}
      resizeMode='cover'
      blurRadius={10}
      source={require('../../assets/images/autumn-background.png')} >
        <Container>
          <Header
              style={{
                  backgroundColor: 'transparent',
                  borderBottomWidth: 1,
                  borderBottomColor: '#ffffff'
              }}>
            <Left />
            <Body>
            <Title
              style={{
                  color: '#ffffff',
                  paddingBottom: 20
              }}>To Do App</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            {this.props.children}
          </Content>
          <View>
            <Fab
              active={false}
              direction="up"
              containerStyle={{ }}
              style={{
                  backgroundColor: '#5067FF',
                  opacity: this.props.navigation.state.routeName === 'AddToDo' ? 0 : 1
               }}
              position="bottomRight"
              onPress={() => this.goToAddPage()}>
              <Icon name="ios-add" />
            </Fab>
          </View>
        </Container>
      </Image>
    );
  }
}