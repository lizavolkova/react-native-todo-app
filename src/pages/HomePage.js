import React from 'react';
import AddToDo from '../components/AddToDoComponent/AddToDoComponent'
import ViewToDo from '../components/ViewToDoComponent/ViewToDoComponent'
import { View } from 'react-native';
import AppTemplate from '../components/AppTemplate/AppTemplate';

export default class HomePage extends React.Component {
    render() {
        return (
          <AppTemplate>
            <View>
              <AddToDo/>
              <ViewToDo/>
            </View>
          </AppTemplate>
        );
    }
}