import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeClass from './HomeClass';

class Home extends React.Component {
    static navigateOptions = { title: 'Home' }

    render() {
        return (
            <View style={styles.container}>
                <Text>Voici les packages</Text>
                <View style={{ flex: 1 }}>
                    <HomeClass style={styles.container} navigation={this.props.navigation} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignSelf: 'stretch',
    },
});

export default Home
