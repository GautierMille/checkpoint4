import React from "react";
import { View, TextInput, Button, Text, Image, ScrollView, TouchableOpacity, TouchableHighlight } from "react-native";
import axios from 'axios';
import { connect } from 'react-redux'



class Vote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    imagePressed() {
        alert("ok")
    }
    userVote = (valeur) => {
        axios.put(`http://192.168.1.150:5050/package/${this.props.id}/vote`, { userVote: valeur, userId: this.props.user_id }).then(response => {
        })
    }

    render() {
        return (
            <View style={{ padding: 10, flexDirection: "row", borderColor: "black", borderWidth: 3, borderRadius: 10 }}>
                <TouchableOpacity onPress={() => this.userVote(-1)} style={{ backgroundColor: "black" }}><Image source={require("../assets/php.png")} style={{ height: 40, width: 40 }} /></TouchableOpacity>
                <Text style={{ padding: 10 }}> 124</Text>
                <TouchableOpacity onPress={() => this.userVote(1)} style={{ backgroundColor: "black" }}><Image source={require("../assets/react.png")} style={{ height: 40, width: 40 }} /></TouchableOpacity>
            </View >
        );
    }
}
const mapStateToProps = state => ({
    user_id: state.user_id
});

export default connect(mapStateToProps)(Vote)