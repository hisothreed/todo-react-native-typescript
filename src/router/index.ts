import { createStackNavigator } from 'react-navigation'
import HomeScreen from '../screens/Home'
import TodoScreen from '../screens/Todo'
import AddTodo from '../screens/AddTodo'

export const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Todo: { screen: TodoScreen }
  },
  {
    initialRouteName: 'Home'
  }
)

export const RootSatck = createStackNavigator(
  {
    Home: {
      screen: HomeStack
    },
    AddTodoModal: {
      screen: AddTodo
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'Home'
  }
)
