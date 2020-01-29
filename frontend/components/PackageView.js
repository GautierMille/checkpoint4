import React from "react";
import { View, TextInput, Button, Text, Image } from "react-native";

class PackageView extends React.Component {

    render() {
        return (
            <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'stretch', }}>{this.props.pack.name}</Text>
        )
    }
}
export default PackageView