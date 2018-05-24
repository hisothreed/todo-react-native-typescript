import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { Card, CardItem, Left, CheckBox, Button, Icon, Right } from 'native-base';
// Styles
import styles from './TodoListStyles';
export default class TodoList extends React.Component {
    render() {
        const itemRenderer = ({ item }) => {
            return React.createElement(Card, null,
                React.createElement(CardItem, null,
                    React.createElement(Left, null,
                        React.createElement(View, { style: { width: 50 } },
                            React.createElement(CheckBox, { onPress: () => this.props.toggle(item), checked: item.completed })),
                        React.createElement(Text, null, item.title)),
                    React.createElement(Right, null,
                        React.createElement(Button, { transparent: true, onPress: () => this.props.selected(item) },
                            React.createElement(Icon, { name: 'arrow-forward' })))));
        };
        return (React.createElement(View, null,
            React.createElement(FlatList, { style: styles.TodoList, data: this.props.todos, renderItem: itemRenderer })));
    }
}
//# sourceMappingURL=TodoList.js.map