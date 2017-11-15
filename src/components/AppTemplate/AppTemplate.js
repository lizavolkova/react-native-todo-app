import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class AppTemplate extends Component {
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
      </Container>
    );
  }
}