import React from 'react';
import { Container, Header, Content, Form, Item, Input, Title, Button, Text } from 'native-base';
class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    _handleCreate() {
        if (this.state.value.length < 4) {
            alert('Please enter a valid todo');
            return;
        }
        this.props.addTodo({
            title: this.state.value,
            completed: false
        });
        this.props.navigation.goBack();
    }
    render() {
        return (React.createElement(Container, null,
            React.createElement(Header, null,
                React.createElement(Title, null, "Add Todo")),
            React.createElement(Content, null,
                React.createElement(Form, null,
                    React.createElement(Item, null,
                        React.createElement(Input, { placeholder: 'What Todo', value: this.state.value, onChange: e => this.setState(Object.assign({}, this.state, { value: e.nativeEvent.text })) })),
                    React.createElement(Button, { onPress: () => this._handleCreate(), style: { alignSelf: 'center', marginTop: 20 }, primary: true },
                        React.createElement(Text, null, " Create "))))));
    }
}
AddTodo.navigationOptions = {
    title: 'Add Todo'
};
// ************* CONNECT ************* //
import { connect } from 'react-redux';
import Actions from './../../store/actions';
const mapStateToProps = state => ({
    todos: state.todos.todos
});
const mapDispatcherToProps = dispatch => ({
    addTodo: (todo) => dispatch(Actions.addTodo(todo))
});
export default connect(mapStateToProps, mapDispatcherToProps)(AddTodo);
//# sourceMappingURL=AddTodo.js.map