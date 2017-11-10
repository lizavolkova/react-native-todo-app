import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { editToDo } from '../../actions/ToDoActions'
import ToDoListItem from '../ToDoListItem/ToDoListItem'

class ViewToDo extends React.Component {
    editingToDo(id) {
        console.log('EDITING!!');
    }

    render() {
        const todos = this.props.todos.map((todo, index) => {
            return (
                <View>
                    <img src="http://www.placehold.it/100x100" alt=""/>
                    <Text key={index}>{todo.name}</Text>
                </View>
            )
        });

        return (
            <View >
                <Text>VIEW TO DO LIST</Text>
                <FlatList
                    data={this.props.todos}
                    renderItem={({item}) => <ToDoListItem todo={item} editToDo={this.editingToDo()}/>}
                />
            </View>
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
        editToDo(id) {
            console.log(id)
            dispatch(editToDo(id));
        }
    };
}               
                

export default connect(mapStateToProps, mapDispatchToProps)(ViewToDo)