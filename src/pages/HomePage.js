import React from 'react';
import AddToDo from '../components/AddToDoComponent/AddToDoComponent'
import ViewToDo from '../components/ViewToDoComponent/ViewToDoComponent'
import { View } from 'react-native';

export default class HomePage extends React.Component {
    render() {
        return (
            <View>
                <AddToDo/>
                <ViewToDo/>
            </View>
        );
    }
}