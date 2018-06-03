import React from 'react';
import { Text, View, FlatList, Button } from 'react-native';
// Styles
import styles from './LoginStyles';
class Login extends React.Component {
    _userSelectedHandler(user) {
        return this.props.handleUser(user);
    }
    render() {
        const buttonTitle = 'Select';
        const renderItemForRow = ({ item }) => (React.createElement(View, { style: styles.listItem },
            React.createElement(Text, null, item.name),
            React.createElement(Button, { onPress: () => this._userSelectedHandler(item), title: buttonTitle })));
        return (React.createElement(View, { style: styles.loginView },
            React.createElement(View, { style: styles.textView },
                React.createElement(Text, { style: [styles.white, styles.bgFont] }, "Welcome To Todo App"),
                React.createElement(Text, { style: styles.white }, "Please choose account to Login")),
            React.createElement(View, { style: styles.listContainer },
                React.createElement(FlatList, { scrollEnabled: false, data: [{ key: '0', name: 'Dev', token: 'dummyToken' }], renderItem: renderItemForRow }))));
    }
}
// ************* CONNECT ************* //
import { connect } from 'react-redux';
import Actions from './../../store/actions';
const mapStateToProps = state => ({
    user: state.User.current_user
});
const mapDispatcherToProps = dispatch => ({
    handleUser: user => dispatch(Actions.setUser(user))
});
export default connect(mapStateToProps, mapDispatcherToProps)(Login);
//# sourceMappingURL=Login.js.map