import React from 'react';
import App from './App';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store';
const { store, persistor } = configureStore();
export default class Root extends React.Component {
    render() {
        return (React.createElement(Provider, { store: store },
            React.createElement(PersistGate, { loading: null, persistor: persistor },
                React.createElement(App, null))));
    }
}
AppRegistry.registerComponent('Root', () => Root);
//# sourceMappingURL=Root.js.map