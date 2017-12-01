import React from 'react';
// import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { setToDoInProgress, completeToDo } from '../../actions/ToDoActions'
// import ToDoListItem from '../ToDoListItem/ToDoListItem'
import { ListView, View } from 'react-native';
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

    renderToDoRows(todo) {
        let iconType;

        if (todo.completed) {
            iconType = 'ios-done-all-outline';
        }

        if (todo.editing) {
            iconType = 'ios-create-outline';
        }

        return (
            <ListItem
                style={{
                        backgroundColor: '#582127',
                        opacity: 1,
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 20,
                        paddingBottom: 20
                    }}
                onPress={() => this.props.navigation.navigate('EditToDo', {id: todo.id})}>
                <Thumbnail square size={80} source={{ uri: todo.image }} />
                <Body>
                    <View
                        style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                    <Text
                        style={{
                        color: '#ffffff',
                        fontWeight: 'bold',
                        marginRight: 10,
                        display: 'flex',
                        textDecorationLine: todo.completed ? 'line-through' : 'none'
                    }}>{todo.name}
                    </Text>
                    <Icon style={{
                            opacity: 0.8,
                            color: '#ffffff',
                            fontSize: 25,
                            display: 'flex',
                        }}
                          active name={iconType} />
                    </View>
                <Text note
                    style={{
                        textDecorationLine: todo.completed ? 'line-through' : 'none'
                    }}>{todo.text}</Text>
                </Body>
            </ListItem>
        )
    }

  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
          <List
              style={{
                    backgroundColor: 'red'
                }}
            dataSource={this.ds.cloneWithRows(this.props.todos)}

            renderRow={todo => this.renderToDoRows(todo)}
              // Left Icons
            renderLeftHiddenRow={todo =>
                <View style={{flexDirection: 'row', height: '100%', backgroundColor: 'yellow'}}>
                    <Button style={{height: '100%'}} full info onPress={() => this.props.setToDoInProgress(todo.id)} >
                        <Icon active name="ios-alarm" />
                      </Button>
                </View>
            }

              // Right Icons
            renderRightHiddenRow={(todo, secId, rowId, rowMap) =>
                <View style={{flexDirection: 'row', height: '100%', backgroundColor: 'yellow'}}>
                      <Button style={{height: '100%'}} full success onPress={() => this.props.completeToDo(todo.id)} >
                          <Icon active name="ios-checkbox" />
                      </Button>
                      <Button style={{height: '100%'}} full danger >
                          <Icon active name="trash" />
                      </Button>
                </View>}
            leftOpenValue={75}
            rightOpenValue={-150}
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
        },
        completeToDo(id) {
            dispatch(completeToDo(id))
        }
    };
}               
                

export default connect(mapStateToProps, mapDispatchToProps)(ViewToDo)