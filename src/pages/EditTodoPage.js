import React from 'react';
import EditToDo from '../components/EditToDo/EditToDo';
import { connect } from 'react-redux';
import { saveToDo } from '../actions/ToDoActions';
import AppTemplate from '../components/AppTemplate/AppTemplate';

class EditToDoPage extends React.Component {
  constructor(props) {
    super(props);

    const todo = this.props.todos.find((todo) => {
      return todo.id === this.props.navigation.state.params.id
    })

    this.state = {
      todo
    }
  }

  saveToDoAndGoHome(todo) {
    this.props.saveToDo(todo);
    this.props.navigation.goBack();
  }

  render() {
    return (
      <AppTemplate navigation={this.props.navigation}>
        <EditToDo
          todo={this.state.todo}
          onCtaClick={this.saveToDoAndGoHome.bind(this)} />
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
    saveToDo(todo) {
      dispatch(saveToDo(todo));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (EditToDoPage)