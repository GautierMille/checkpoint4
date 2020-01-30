import React from 'react';
import { StyleSheet, TextInput, View, Button, TouchableOpacity, Text, Image } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux'

class Connect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            navigate: this.props.navigation.navigate,
            user_id: null
        }
    }
    connectAccount() {
        axios.post(`http://192.168.1.150:5050/auth/log`, this.state).then(response => {
            this.props.getId(response.data.user)
            this.state.navigate('Home')
        })
    }
    goToCreateAccount() {
        this.state.navigate('AccountCreation')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ alignItems: "center", marginTop: 30, marginBottom: 40 }}>
                    <Image source={require("../assets/react.png")} style={{ height: 200, width: 200 }} />
                    <Text style={{ color: "white", fontSize: 32 }}>React Choice</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <TextInput
                        placeholder='email'
                        onChangeText={(text) => this.setState({ email: text })}
                        style={{ backgroundColor: "white", color: "black", marginLeft: 50, marginRight: 50, paddingLeft: 10 }}
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <TextInput
                        placeholder='password'
                        onChangeText={(text) => this.setState({ password: text })}
                        secureTextEntry={true}
                        style={{ backgroundColor: "white", color: "black", marginLeft: 50, marginRight: 50, paddingLeft: 10 }}
                    />
                </View>

                <TouchableOpacity onPress={() => this.connectAccount()} title='Connect' style={{ marginTop: 20, backgroundColor: "#61DAFB", padding: 20, alignItems: "center" }}>
                    <Text style={{ color: "black", fontSize: 18 }}>Connect</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.goToCreateAccount()} style={{ alignItems: "center", marginTop: 40, backgroundColor: "#61DAFB", padding: 20 }} >
                    <Text style={{ color: "black", fontSize: 18 }}>Create an account</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getId: (id) => dispatch({ type: "LOG", value: id })
    }
}


export default connect(null, mapDispatchToProps)(Connect)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignSelf: 'stretch',
    },
});
