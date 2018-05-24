import React from 'react';
import { View, Button } from 'react-native';
import TodoList from '../../components/Home/TodoList/TodoList';
// Styles
import styles from './HomeStyles';
class Home extends React.Component {
    constructor() {
        super(...arguments);
        this._handleLogout = () => {
            this.props.logout();
        };
    }
    componentWillMount() {
        this.props.navigation.setParams({ logout: this._handleLogout });
    }
    _handleTodoToggle(todo) {
        this.props.toggleTodo(todo);
    }
    _handleTodoSelect(todo) {
        this.props.navigation.push('Todo', { todo });
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(TodoList, { selected: todo => this._handleTodoSelect(todo), toggle: todo => this._handleTodoToggle(todo), todos: this.props.todos })));
    }
}
Home.navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
        title: 'Home',
        headerRight: (React.createElement(Button, { onPress: () => navigation.navigate('AddTodoModal'), title: 'Add', color: 'black' })),
        headerLeft: (React.createElement(Button, { onPress: () => params.logout(), title: 'Logout', color: 'black' }))
    };
};
// ************* CONNECT ************* //
import { connect } from 'react-redux';
import Actions from './../../store/actions';
const mapStateToProps = state => ({
    todos: state.todos.todos
});
const mapDispatcherToProps = dispatch => ({
    toggleTodo: todo => dispatch(Actions.toggleTodo(todo)),
    logout: () => dispatch(Actions.logout())
});
export default connect(mapStateToProps, mapDispatcherToProps)(Home);
//# sourceMappingURL=Home.js.map