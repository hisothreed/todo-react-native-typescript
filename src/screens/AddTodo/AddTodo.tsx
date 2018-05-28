import React from 'react'
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Title,
  Button,
  Text
} from 'native-base'

// Styles
// import styles from './AddTodoStyles'

interface Todo {
  title: string
  completed: boolean
}

interface Props {
  navigation: any,
  addTodo: (todo: Todo) => void
}

interface State {
  value: string
}

class AddTodo extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'Add Todo'
  }

  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  _handleCreate() {
    if (this.state.value.length < 4) {
      alert('Please enter a valid todo')
      return
    }
    this.props.addTodo({
      title: this.state.value,
      completed: false
    })
    this.props.navigation.goBack()
  }

  render() {
    return (
      <Container>
        <Header>
          <Title>Add Todo</Title>
        </Header>
        <Content>
          <Form>
            <Item>
              <Input
                placeholder='What Todo'
                value={this.state.value}
                onChange={e =>
                  this.setState({ ...this.state, value: e.nativeEvent.text })
                }
              />
            </Item>
            <Button
              onPress={() => this._handleCreate()}
              style={{ alignSelf: 'center', marginTop: 20 }}
              primary
            >
              <Text> Create </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}
// ************* CONNECT ************* //

import { connect } from 'react-redux'
import Actions from './../../store/actions'

const mapStateToProps = state => ({
  todos: state.Todos.todos
})
const mapDispatcherToProps = dispatch => ({
  addTodo: (todo) => dispatch(Actions.addTodo(todo))
})

export default connect(mapStateToProps, mapDispatcherToProps)(AddTodo)
