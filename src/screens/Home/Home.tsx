import React from 'react'
import { View, Button } from 'react-native'
import TodoList from '../../components/Home/TodoList/TodoList'
// Styles
import styles from './HomeStyles'

interface Todo {
  title: string
  completed: boolean
}

interface Props {
  todos: Todo[]
  toggleTodo: (todo: Todo) => void
  logout: () => void
  navigation: any
}

interface State {}

class Home extends React.Component<Props, State> {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {}

    return {
      title: 'Home',
      headerRight: (
        <Button
          onPress={() => navigation.navigate('AddTodoModal')}
          title='Add'
          color='black'
        />
      ),
      headerLeft: (
        <Button onPress={() => params.logout()} title='Logout' color='black' />
      )
    }
  }

  

  componentWillMount() {
    this.props.navigation.setParams({ logout: this._handleLogout })
  }

  _handleLogout = () => {
    this.props.logout()
  }

  _handleTodoToggle(todo: Todo) {
    this.props.toggleTodo(todo)
  }
  _handleTodoSelect(todo: Todo) {
    this.props.navigation.push('Todo', { todo })
  }
  render() {
    return (
      <View style={styles.container}>
        <TodoList
          selected={todo => this._handleTodoSelect(todo)}
          toggle={todo => this._handleTodoToggle(todo)}
          todos={this.props.todos}
        />
      </View>
    )
  }
}

// ************* CONNECT ************* //

import { connect } from 'react-redux'
import Actions from './../../store/actions'

const mapStateToProps = state => ({
  todos: state.Todos.todos.toArray()
})

const mapDispatcherToProps = dispatch => ({
  toggleTodo: todo => dispatch(Actions.toggleTodo(todo)),
  logout: () => dispatch(Actions.logout())
})

export default connect(mapStateToProps, mapDispatcherToProps)(Home)
