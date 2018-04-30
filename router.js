import { StackNavigator } from 'react-navigation';
import Home from './Home';
import TaskForm from './TaskForm';

export default StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Task: {
      screen: TaskForm,
    },
  },
  {
    initialRouteName: 'Home',
  },
);
