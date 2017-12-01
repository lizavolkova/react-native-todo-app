import React from 'react';
import { List, ListItem, Thumbnail, Button, Text, Body, View, Icon } from 'native-base';

class ToDoList extends React.Component {
    getToDoIcon(todo) {
        if (todo.completed) {
            return 'ios-done-all-outline';
        }

        if (todo.editing) {
            return 'ios-create-outline';
        }
    }
    render() {


        const todos = this.props.todos.map((todo) => {
            return (
                <ListItem
                    style={{
                        backgroundColor: 'transparent',
                        paddingBottom: 20,
                        paddingTop: 20,
                        marginRight: 10
                    }}
                    key={todo.id}>
                    <Thumbnail square size={80} source={{ uri: todo.image }} />
                    <Body
                        style={{
                        paddingBottom: 15
                    }}>
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
                                paddingLeft: 15
                        }}>{todo.name}</Text>
                        <Icon style={{
                            opacity: 0.8,
                            color: '#ffffff',
                            fontSize: 22,
                            display: 'flex',
                        }}
                              active name={this.getToDoIcon(todo)} />
                    </View>

                    <Text note
                          style={{
                            color: '#ffffff',
                            opacity: 0.9
                        }}>{todo.text}</Text>
                    </Body>
                </ListItem>
            )
        })
        return (
            <List>
                <List>
                    {todos}
                </List>
            </List>
        );
    }
}

export default ToDoList;