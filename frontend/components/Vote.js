import React from "react";
import { View, TextInput, Button, Text, Image, ScrollView, TouchableOpacity, TouchableHighlight } from "react-native";


class Vote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    imagePressed() {
        alert("ok")
    }

    render() {
        return (
            <View style={{ padding: 10, flexDirection: "row", borderColor: "black", borderWidth: 3, borderRadius: 10 }}>
                <TouchableHighlight onPress={this.imagePressed}><Image source={require("../assets/php.png")} style={{ height: 40, width: 40 }} /></TouchableHighlight>
                <Text style={{ padding: 10 }}> 124</Text>
                <TouchableHighlight onPress={this.imagePressed}><Image source={require("../assets/react.png")} style={{ height: 40, width: 40 }} /></TouchableHighlight>
            </View >
        );
    }
}
export default Vote