import React from 'react';
import { Image, Text, StyleSheet, TextInput, View, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import axios from 'axios';

class AccountCreation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            pseudo: null,
            navigate: this.props.navigation.navigate,
            user_id: null
        }
    }

    createAccount() {
        axios.post(`http://192.168.1.150:5050/auth/signup`, { email: this.state.email, password: this.state.password })
            .then(response => {
                this.props.getId(response.data.user)
                this.state.navigate('Home', { user_id: this.state.user_id })
            })
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
                        style={{ backgroundColor: "white", color: "black", marginLeft: 50, marginRight: 50, paddingLeft: 10 }}
                        placeholder='email'
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <TextInput
                        style={{ backgroundColor: "white", color: "black", marginLeft: 50, marginRight: 50, paddingLeft: 10 }}
                        placeholder='pseudo'
                        onChangeText={(text) => this.setState({ pseudo: text })}
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <TextInput
                        style={{ backgroundColor: "white", color: "black", marginLeft: 50, marginRight: 50, paddingLeft: 10 }}
                        placeholder='password'
                        onChangeText={(text) => this.setState({ password: text })}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity style={{ alignItems: "center", marginTop: 40, backgroundColor: "#61DAFB", padding: 20 }} onPress={() => this.createAccount()} >
                    <Text style={{ color: "black", fontSize: 18 }}>Create account</Text>
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

export default connect(null, mapDispatchToProps)(AccountCreation)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignSelf: 'stretch',
    },
});
