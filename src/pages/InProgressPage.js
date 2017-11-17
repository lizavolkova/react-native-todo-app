import React from 'react';
import { connect } from 'react-redux';
import AppTemplate from '../components/AppTemplate/AppTemplate';
import { List, ListItem, Text } from 'native-base';

class InProgressPage extends React.Component {
  render() {
    const toDoItems = this.props.todos.map((todo) => {
      if (todo.inProgress) {
        return (
          <ListItem key={todo.id}>
            <Text>{todo.name}</Text>
          </ListItem>
        );
      }
    })

    return (
      <AppTemplate>
        <Text>
          In progress todos:
        </Text>
        <List>
          {toDoItems}
        </List>
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