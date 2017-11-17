import React from 'react';
import ViewToDo from '../components/ViewToDoComponent/ViewToDoComponent'
import AppTemplate from '../components/AppTemplate/AppTemplate';
import { Button } from 'native-base';
import { Text } from 'react-native';

export default class HomePage extends React.Component {
    render() {
        return (
          <AppTemplate navigation={this.props.navigation}>
              <ViewToDo navigation={this.props.navigation}/>
          </AppTemplate>
        );
    }
}