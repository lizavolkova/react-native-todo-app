import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Fab, View } from 'native-base';

export default class AppTemplate extends Component {
  goToAddPage() {
    this.props.navigation.navigate('AddToDo');
    console.log('add to do!', this.props)
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
          <Title>Header</Title>
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
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.goToAddPage()}>
            <Icon name="ios-add" />
          </Fab>
        </View>
      </Container>
    );
  }
}