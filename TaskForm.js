import React, { Component } from 'react';
import { Container, Content, Item, Input, Icon } from 'native-base';
import { StackNavigator } from 'react-navigation';
import { Button, Text } from 'react-native-elements';

class Taskform extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: '',
    };
  }

  onCancel = () => {
    this.props.navigation.goBack();
  };

  onAddPressed = () => {
    const { params } = this.props.navigation.state;
    this.props.navigation.goBack();
    params.onAdd({ task: this.state.text });
  };

  render() {
    return (
      <Container>
        <Text h1 style={{ margin: 20 }}>Task</Text>
        <Content style={{ alignSelf: 'center' }}>
          <Item rounded style={{ marginBottom: 20 }} >
            <Input
              placeholder="Input the new Task name"
              style={{ alignSelf: 'center' }}
              onChangeText={(text) => { this.setState({ text }) }}
              value={this.state.text}
            />
            <Icon active name="add" />
          </Item>
          <Button
            title="Add"
            titleStyle={{ fontWeight: '700' }}
            buttonStyle={{
              backgroundColor: 'rgba(92,99,216, 1)',
              width: 200,
              height: 45,
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 7,
              marginBottom: 15,
            }}
            containerStyle={{ marginTop: 20 }}
            onPress={this.onAddPressed}
          />
          <Button
            title="Cancel"
            titleStyle={{ fontWeight: '700' }}
            buttonStyle={{
              backgroundColor: 'rgba(92,23,130, 1)',
              width: 200,
              height: 45,
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 7,
            }}
            containerStyle={{ marginTop: 20 }}
            onPress={this.onCancel}
          />
        </Content>
      </Container>
    );
  }
}

export default Taskform;
