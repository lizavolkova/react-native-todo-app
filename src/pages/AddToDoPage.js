import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { addToDo } from '../actions/ToDoActions';
import EditToDo from '../components/EditToDo/EditToDo';
import AppTemplate from '../components/AppTemplate/AppTemplate';
import { Form, Item, Input, Label, Thumbnail, Button } from 'native-base';

class AddToDoPage extends React.Component {

  addToDoAndReturnHome(todo) {
    this.props.addToDo(todo);
    this.props.navigation.goBack();
  }

  render() {
    return (
      <AppTemplate>
        <EditToDo onCtaClick={this.addToDoAndReturnHome.bind(this)}/>
      </AppTemplate>
    );
  }
}

function mapStateToProps({toDoReducer}) {
  return {
    todos: toDoReducer.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo(todo) {
      dispatch(addToDo(todo));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToDoPage)