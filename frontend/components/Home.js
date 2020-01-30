import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import HomeClass from './HomeClass';
import { connect } from 'react-redux'

class Home extends React.Component {
    static navigateOptions = { title: 'Home' }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: "row", backgroundColor: "black", alignItems: "center", justifyContent: "center" }}>
                    <Image source={require("../assets/react.png")} style={{ height: 40, width: 40 }} />
                    <Text style={{ color: "white", fontSize: 18 }}>React Choice</Text>
                </View>
                <View style={{ padding: 20, backgroundColor: "#61DAFB", alignItems: "center" }}><Text style={{ fontSize: 18, fontWeight: "bold" }}>Bonjour {this.props.pseudo}</Text></View>
                <View style={{ borderColor: "black", borderWidth: 3 }}>
                    <HomeClass style={styles.container} navigation={this.props.navigation} />
                </View>
            </View >
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

const mapStateToProps = state => ({
    pseudo: state.pseudo
});

export default connect(mapStateToProps)(Home)
