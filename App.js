import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button } from 'native-base';
import TaskList from './TaskList';

class App extends Component {
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
  };

  render() {
    return (
      <Container>
        <Content>
          <TaskList
            onAddStarted={this.onAddStarted}
            todos={this.state.todos}
          />
        </Content>
      </Container>
    );
  }
}

export default App;
