import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeClass from './components/HomeClass';
import NavBar from './components/Navbar';
import Navigation from './components/Navigation'



export default function App() {
  return (
    <Navigation />
    // <View style={styles.container}>
    //   <View style={{ flex: 0.1 }}>
    //     <NavBar />
    //   </View>
    //   <View style={{ flex: 0.9 }}>
    //     <HomeClass style={styles.container} />
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
  },
});
