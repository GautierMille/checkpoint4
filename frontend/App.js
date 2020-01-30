import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import HomeClass from './components/HomeClass';
import AccountCreation from './components/AccountCreation';
import Connect from './components/Connect';
import PackageDetail from './components/PackageDetail';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from './store/reducer'

const store = createStore(reducer)

const Navigator = createStackNavigator({
  Connect: { screen: Connect },
  AccountCreation: { screen: AccountCreation },
  Home: { screen: Home },
  PackageDetail: { screen: PackageDetail },
  HomeClass: { screen: HomeClass }
})

const Navigation = createAppContainer(Navigator)

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
  },
});
