import React from 'react'
import { connect } from 'react-redux'
import LoginScreen from './screens/Login'
import { RootSatck } from './router'

interface User {
  name: string
  token: string
}

interface Props {
  user?: User
}

interface State {}

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props)
  }
  render() {
    const visibleScreen = this.props.user ? <RootSatck /> : <LoginScreen />
    return visibleScreen
  }
}

const mapStateToProps = state => ({
  user: state.user.current_user
})

export default connect(mapStateToProps)(App)
