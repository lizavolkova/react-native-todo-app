import React from 'react';
import { connect } from 'react-redux';
import AppTemplate from '../components/AppTemplate/AppTemplate';
import ToDoList from '../components/ToDoList/ToDoList';

class DonePage extends React.Component {
  render() {
      const doneTodos = this.props.todos.filter((todo) => {
          return todo.completed
      });

    return (
      <AppTemplate>
        <ToDoList todos={doneTodos}></ToDoList>
      </AppTemplate>
    );
  }
}

function mapStateToProps({toDoReducer}) {
    return {
        todos: toDoReducer.todos
    };
}

export default connect(mapStateToProps, null) (DonePage);