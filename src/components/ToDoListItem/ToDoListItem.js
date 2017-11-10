import React from 'react';
import { View, Text, Image } from 'react-native';

class ToDoListItem extends React.Component {
    render() {
        const editing = this.props.todo.editing ? 'editing!': 'not editing';
        const complete = this.props.todo.completed ? 'done': 'wip';

        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (
            <View >
                <Image source={pic} style={{width: 193, height: 110}}/>
                <Text>TODO: {this.props.todo.id} {this.props.todo.name}</Text>
                <Text>editing? {editing}</Text>
                <Text>complete? {complete}</Text>
                <Text onClick={this.props.editToDo.bind(this, this.props.todo.id)}>EDIT</Text>
            </View>
        );
    }
}


export default ToDoListItem
