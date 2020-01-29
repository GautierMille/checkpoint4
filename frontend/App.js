import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import HomeClass from './components/HomeClass';


export default function App() {
  return (
    <View style={styles.container}>
      <HomeClass style={styles.container} />
      {/* <Home /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
});
