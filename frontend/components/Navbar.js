import React from "react";
import { View, TextInput, Button, Text, Image, ScrollView, TouchableOpacity } from "react-native";


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={{ flex: 1, paddingTop: 25, flexDirection: "row" }}>
                <TouchableOpacity style={{ flex: 1, backgroundColor: "black", color: "white", alignItems: "center", justifyContent: "center" }} >
                    <Text style={{ flex: 1, color: "white" }}>TEST</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, backgroundColor: "black", color: "white", alignItems: "center", justifyContent: "center" }} >
                    <Text style={{ flex: 1, color: "white" }}>TEST</Text>
                </TouchableOpacity>
            </View >
        );
    }
}
export default NavBar