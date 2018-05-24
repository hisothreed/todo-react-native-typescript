import React from 'react'
import { View, Text } from 'react-native'

// Styles
import styles from './TodoStyles'

interface Todo {
  title: string
  completed: boolean
}

interface Props {
  navigation: any
}

interface State { }

class Todo extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'Todo'
  }
  render() {
    const todo: Todo = this.props.navigation.getParam('todo', {})
    return (
      <View style={styles.container}>
        <Text>{ todo.title }</Text>
      </View>
    )
  }
}

export default Todo
