import React from 'react';
import { StyleSheet, TextInput, View, Button, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';

class Connect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            navigate: this.props.navigation.navigate
        }
    }
    connectAccount() {
        axios.post(`http://192.168.1.150:5050/auth/log`, this.state).then(response => {
            console.log("ok")
            this.state.navigate('Home')
        })
            .catch((err) => console.log(err));
    }
    goToCreateAccount() {
        this.state.navigate('AccountCreation')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 0.3 }}>
                    <TextInput
                        placeholder='email'
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                </View>
                <View style={{ flex: 0.3 }}>
                    <TextInput
                        placeholder='password'
                        onChangeText={(text) => this.setState({ password: text })}
                        secureTextEntry={true}
                    />
                </View>
                <Button onPress={() => this.connectAccount()} title='Connect'></Button>

                <TouchableOpacity onPress={() => this.goToCreateAccount()} style={{ flex: 1, backgroundColor: "black", color: "white", alignItems: "center", justifyContent: "center" }} >
                    <Text style={{ flex: 1, color: "white" }}>Create an account</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default Connect

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignSelf: 'stretch',
    },
});
