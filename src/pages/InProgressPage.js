import React from 'react';
import { Text } from 'react-native';
import AppTemplate from '../components/AppTemplate/AppTemplate';

export default class InProgressPage extends React.Component {
  render() {
    return (
      <AppTemplate>
        <Text>
          In progress todos
        </Text>
      </AppTemplate>
    );
  }
}