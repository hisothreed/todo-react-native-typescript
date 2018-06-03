import React from 'react'
import { Text, View, FlatList, Button } from 'react-native'

// Styles
import styles from './LoginStyles'

interface User {
  name: string
  token: string
}

interface Props {
  handleUser: (user: User) => void
  user: User
}

interface State {}

class Login extends React.Component<Props, State> {
  _userSelectedHandler(user) {
    return this.props.handleUser(user)
  }

  render() {
    const buttonTitle = 'Select'
    const renderItemForRow = ({ item }) => (
      <View style={styles.listItem}>
        <Text>{item.name}</Text>
        <Button
          onPress={() => this._userSelectedHandler(item)}
          title={buttonTitle}
        />
      </View>
    )
    return (
      <View style={styles.loginView}>
        <View style={styles.textView}>
          <Text style={[styles.white, styles.bgFont]}>Welcome To Todo App</Text>
          <Text style={styles.white}>Please choose account to Login</Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            scrollEnabled={false}
            data={[{ key: '0', name: 'Dev', token: 'dummyToken' }]}
            renderItem={renderItemForRow}
          />
        </View>
      </View>
    )
  }
}

// ************* CONNECT ************* //

import { connect } from 'react-redux'
import Actions from './../../store/actions'

const mapStateToProps = state => ({
  user: state.User.current_user
})

const mapDispatcherToProps = dispatch => ({
  handleUser: user => dispatch(Actions.setUser(user))
})

export default connect(mapStateToProps, mapDispatcherToProps)(Login)
