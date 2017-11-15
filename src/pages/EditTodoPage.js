import React from 'react';
import { Text } from 'react-native';
import AppTemplate from '../components/AppTemplate/AppTemplate';

export default class EditToDoPage extends React.Component {
  render() {
    return (
      <AppTemplate>
        <Text>
          Edit Todo
        </Text>
      </AppTemplate>
    );
  }
}