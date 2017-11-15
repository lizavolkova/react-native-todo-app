import React from 'react';
import HomePage from './src/pages/HomePage';
import { View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import { Tabs } from './src/router/MainTabs'

let store = createStore(reducers)

export default class App extends React.Component {

  render() {
    return (
        <Provider store={store}>
            <Tabs />
        </Provider>
    );
  }
}