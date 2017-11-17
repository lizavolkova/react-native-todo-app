import React from 'react';
import { Text } from 'react-native';

import { Form, Item, Input, Label, Thumbnail, Button } from 'native-base';

class EditToDo extends React.Component {
  constructor(props) {
    super(props);

    const defaultToDo = {
      name: ''
    };
    const todo = this.props.todo ? this.props.todo : defaultToDo;

    this.state = {
      todo
    }
  }

  updateName(text) {
    const todo = {...this.state.todo}
    todo.name = text.text;
    this.setState({
      todo
    });
  }

  updateText(text) {
    const todo = {...this.state.todo}
    todo.text = text.text;
    this.setState({
      todo
    });
  }


  render() {
    const { todo } = this.state;

    return (
      <Form>
        <Item stackedLabel>
          <Label>Title</Label>
          <Input
            stackedLabel
            last
            value={todo.name}
            onChangeText={(text) => this.updateName({text})}/>
        </Item>

        <Item stackedLabel last>
          <Label>Text</Label>
          <Input
          multiline={true}
          numberOfLines={3}
          style={{height: 100}}
          value={todo.value}
          onChangeText={(text) => this.updateText({text})}/>
        </Item>

        <Button full onPress={() => this.props.onCtaClick(this.state.todo)}>
          <Text>Save</Text>
        </Button>
      </Form>
    );
  }
}

export default EditToDo;