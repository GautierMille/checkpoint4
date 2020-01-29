import React from "react";
import { View, TextInput, Button, Text, Image } from "react-native";
import Vote from './Vote';

class PackageView extends React.Component {

    render() {
        return (
            <View style={{ flexDirection: "row", flex: 1 }} onPress={() => this.props.navigation.navigate('Details')}
            >
                <View style={{ justifyContent: "flex-start", flex: 1, flexDirection: "column" }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'stretch', }}>Nom: {this.props.pack.name}</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'stretch', }}>Category: {this.props.pack.main_category_id}</Text>
                </View>
                <View style={{ justifyContent: "flex-end" }}>
                    <Vote />
                </View>
            </View>
        )
    }
}
export default PackageView