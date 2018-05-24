import React from 'react';
import { View, Text } from 'react-native';
// Styles
import styles from './TodoStyles';
class Todo extends React.Component {
    render() {
        const todo = this.props.navigation.getParam('todo', {});
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, null, todo.title)));
    }
}
Todo.navigationOptions = {
    title: 'Todo'
};
export default Todo;
//# sourceMappingURL=Todo.js.map