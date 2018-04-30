import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Text, View } from 'native-base';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: '300',
  },
  doneButton: {
    borderRadius: 5,
    backgroundColor: '#EAEAEA',
    padding: 5,
  },
});

class TaskRow extends Component {
  onDonePressed = () => {
    this.props.onDone(this.props.todo);
  }

  render() {
    return (
      <View style={styles.container} >
        <Text
          style={styles.label}
        >
          {this.props.todo.task}
        </Text>
        <TouchableHighlight
          onPress={this.onDonePressed}
          style={styles.doneButton}
        >
          <Text>Done</Text>
        </TouchableHighlight>
      </View >
    );
  }
}

TaskRow.propTypes = {
  onDone: PropTypes.func.isRequired,
  onDonePressed: PropTypes.func.isRequired,
  todo: PropTypes.shape({ task: PropTypes.string.isRequired }).isRequired,
};

export default TaskRow;
