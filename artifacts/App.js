import React from 'react';
import { connect } from 'react-redux';
import LoginScreen from './screens/Login';
import { RootSatck } from './router';
export class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const visibleScreen = this.props.user ? React.createElement(RootSatck, null) : React.createElement(LoginScreen, null);
        return visibleScreen;
    }
}
const mapStateToProps = state => ({
    user: state.User.current_user
});
export default connect(mapStateToProps)(App);
//# sourceMappingURL=App.js.map