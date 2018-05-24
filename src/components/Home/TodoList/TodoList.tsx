import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { Card, CardItem, Left, CheckBox, Button, Icon, Right } from 'native-base'
// Styles
import styles from './TodoListStyles'

interface Todo {
  title: string
  completed: boolean
}

interface Props {
  todos: Todo[]
  toggle: (todo: Todo) => void
  selected: (todo: Todo) => void
}

interface State {}

export default class TodoList extends React.Component<Props, State> {
  render() {
    const itemRenderer = ({ item }) => {
      return <Card>
          <CardItem>
            <Left>
              <View style={{ width: 50 }}>
                <CheckBox onPress={() => this.props.toggle(item)} checked={item.completed} />
              </View>
              <Text>{item.title}</Text>
            </Left>
            <Right>
              <Button transparent onPress={() => this.props.selected(item)}>
                  <Icon name='arrow-forward' />
              </Button>
            </Right>
          </CardItem>
        </Card>
    }
    return (
      <View>
        <FlatList
          style={styles.TodoList}
          data={this.props.todos}
          renderItem={itemRenderer}
        />
      </View>
    )
  }
}
