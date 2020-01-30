import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
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
                this.setState({ user_id: response.id })
                this.state.navigate('Home', { user_id: this.state.user_id })
            })
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
                        placeholder='pseudo'
                        onChangeText={(text) => this.setState({ pseudo: text })}
                    />
                </View>
                <View style={{ flex: 0.3 }}>
                    <TextInput
                        placeholder='password'
                        onChangeText={(text) => this.setState({ password: text })}
                        secureTextEntry={true}
                    />
                </View>
                <Button onPress={() => this.createAccount()} title='create'></Button>
            </View>
        )
    }
}
export default AccountCreation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignSelf: 'stretch',
    },
});
