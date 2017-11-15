import React from 'react';
import { Text } from 'react-native';
import AppTemplate from '../components/AppTemplate/AppTemplate';

export default class DonePage extends React.Component {
  render() {
    return (
      <AppTemplate>
        <Text>
          Done todos
        </Text>
      </AppTemplate>
    );
  }
}