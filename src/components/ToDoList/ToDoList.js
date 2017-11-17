import React from 'react';
import { List, ListItem, Thumbnail, Button, Text, Body } from 'native-base';

class ToDoList extends React.Component {

    render() {
        const todos = this.props.todos.map((todo) => {
            return (
                <ListItem key={todo.id}>
                    <Thumbnail square size={80} source={{ uri: 'Image URL' }} />
                    <Body>
                    <Text>{todo.name}</Text>
                    <Text note>{todo.image}</Text>
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