import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button } from 'native-base';
import { StackNavigator } from 'react-navigation';
import TaskList from './TaskList';

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        { task: 'Learn React Native' },
        { task: 'Learn Redux' },
        { task: 'Learn React' },
        { task: 'Learn X' },
      ],
    };
  }

  onAddStarted = () => {
    console.log('Testing Debugger');
    this.props.navigation.navigate('Task', { onAdd: this.onAdd });
  };

  onAdd = (task) => {
    this.state.todos.push(task);
    this.setState({ todos: this.state.todos });
  };

  onDone = (todo) => {
    const filteredTodos = this.state.todos.filter(filterTodos => filterTodos !== todo);
    this.setState({ todos: filteredTodos });
  };

  render() {
    return (
      <Container>
        <Content>
          <TaskList
            onAddStarted={this.onAddStarted}
            onDone={this.onDone}
            todos={this.state.todos}
          />
        </Content>
      </Container>
    );
  }
}

Home.propTypes = {
};

export default Home;
