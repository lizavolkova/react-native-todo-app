import React from 'react';
import { connect } from 'react-redux';
import ViewToDo from '../components/ViewToDoComponent/ViewToDoComponent'
import AppTemplate from '../components/AppTemplate/AppTemplate';
import { Button, Text, Grid, Col } from 'native-base';

class HomePage extends React.Component {
    getDoneToDos() {
        return this.props.todos.filter((todo) => {
            return todo.completed
        }).length;
    }

    render() {
        return (
          <AppTemplate navigation={this.props.navigation}>
              <Grid>
                  <Col style={{ backgroundColor: '#635DB7', height: 100 }}>
                      <Text>{this.getDoneToDos()}</Text>
                      <Text>COMPLETED</Text>
                  </Col>
                  <Col style={{ backgroundColor: '#00CE9F', height: 100 }}></Col>
              </Grid>

              <Grid>
                  <Col>
                      <ViewToDo navigation={this.props.navigation}/>
                  </Col>
              </Grid>
          </AppTemplate>
        );
    }
}

function mapStateToProps({toDoReducer}) {
    return {
        todos: toDoReducer.todos
    };
}

export default connect(mapStateToProps, null) (HomePage);