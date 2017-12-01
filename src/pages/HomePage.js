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

    getInProgressToDos() {
        return this.props.todos.filter((todo) => {
            return todo.editing
        }).length;
    }

    render() {
        return (
          <AppTemplate navigation={this.props.navigation}>
              <Grid>
                  <Col
                      style={{
                      backgroundColor: 'transparent',
                      height: 100,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRightColor: '#ffffff',
                      borderStyle: 'solid',
                      borderRightWidth: 1
                      }}>
                      <Text style={{
                        color: '#ffffff',
                        fontWeight: 'bold'
                        }}>{this.getDoneToDos()}</Text>
                      <Text style={{
                        color: '#ffffff',
                        opacity: 0.8}}>COMPLETED</Text>
                  </Col>
                  <Col style={{
                      backgroundColor: 'transparent',
                      height: 100,
                      alignItems: 'center',
                      justifyContent: 'center'}}>
                      <Text style={{
                        color: '#ffffff',
                        fontWeight: 'bold'
                        }}>{this.getInProgressToDos()}</Text>
                      <Text style={{
                        color: '#ffffff',
                        opacity: 0.8}}>IN PROGRESS</Text>
                  </Col>
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