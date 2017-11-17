import React from 'react';
// import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { setToDoInProgress } from '../../actions/ToDoActions'
// import ToDoListItem from '../ToDoListItem/ToDoListItem'
import { ListView } from 'react-native';
import { Button, Icon, List, ListItem, Text ,Thumbnail, Body } from 'native-base';

class ViewToDo extends React.Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true
    };
  }

  deleteRow(secId, rowId, rowMap) {

  }

  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
              <List
                dataSource={this.ds.cloneWithRows(this.props.todos)}
                renderRow={todo =>
                  <ListItem onPress={() => this.props.navigation.navigate('EditToDo', {id: todo.id})}>
                      <Thumbnail square size={80} source={{ uri: 'http://www.placehold.it/100x100' }} />
                      <Body>
                        <Text>{todo.name}</Text>
                        <Text note>{todo.text}</Text>
                      </Body>
                  </ListItem>}
                renderLeftHiddenRow={todo =>
                  <Button full onPress={() => this.props.setToDoInProgress(todo.id)}>
                      <Icon active name="ios-alarm" />
                  </Button>}
                renderRightHiddenRow={(todo, secId, rowId, rowMap) =>
                  <Button full danger >
                      <Icon active name="trash" />
                  </Button>}
                leftOpenValue={75}
                rightOpenValue={-75}
              />
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
      setToDoInProgress(id) {
            dispatch(setToDoInProgress(id));
        }
    };
}               
                

export default connect(mapStateToProps, mapDispatchToProps)(ViewToDo)