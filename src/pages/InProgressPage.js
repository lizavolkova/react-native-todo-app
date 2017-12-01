import React from 'react';
import { connect } from 'react-redux';
import AppTemplate from '../components/AppTemplate/AppTemplate';
import ToDoList from '../components/ToDoList/ToDoList';

class InProgressPage extends React.Component {
  render() {
      const inProgressTodos = this.props.todos.filter((todo) => {
          return todo.editing
      });

    return (
      <AppTemplate navigation={this.props.navigation}>
          <ToDoList todos={inProgressTodos}></ToDoList>
      </AppTemplate>
    );
  }
}


function mapStateToProps({toDoReducer}) {
  return {
    todos: toDoReducer.todos
  };
}

export default connect(mapStateToProps, null)(InProgressPage)