import React from "react";
import { TabNavigator, StackNavigator } from 'react-navigation';
import InProgressPage from '../pages/InProgressPage';
import DonePage from '../pages/DonePage';
import HomePage from '../pages/HomePage'
import EditTodoPage from '../pages/EditTodoPage';
import AddToDoPage from '../pages/AddToDoPage';
import { Button, Text, Icon, Footer, FooterTab } from 'native-base';

export const HomeScreen = StackNavigator({
  HomeList: {
    screen: HomePage
  },
  EditToDo: {
    screen: EditTodoPage
  },
  AddToDo: {
    screen: AddToDoPage
  }
});

export const Tabs = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: { title: 'Home' }
    },
    InProgress: {
      screen: InProgressPage,
      navigationOptions: {
        title: 'In Progress Todos'
      }
    },
    Done: {
      screen: DonePage,
      navigationOptions: {
        title: 'Complete Todos'
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate('Home')}>
              <Icon name='list' />
              <Text>All</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate('InProgress')}>
              <Icon name="briefcase" />
              <Text>In Progress</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate('Done')}>
              <Icon name='ios-done-all' />
              <Text>Done</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
);