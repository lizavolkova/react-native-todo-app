import React from 'react';
import { AppRegistry, Image, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { connect } from 'react-redux';
import { addToDo } from '../../actions/ToDoActions'

class AddToDo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        };
    }

    updateValue() {
        this.props.addToDo({
            name: this.state.inputValue
        })

        this.setState({
            inputValue: ''
        })
    }

    render() {
        return (
            <View >
                <Text>{this.state.text}</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(inputValue) => this.setState({inputValue})}
                    value={this.state.inputValue}
                    placeholder="Type to do here"
                />
                <Button
                    title="Add todo"
                    onPress={this.updateValue.bind(this)}></Button>
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToDo(todo) {
            dispatch(addToDo(todo));
        }
    };
}

export default connect(null, mapDispatchToProps)(AddToDo);
