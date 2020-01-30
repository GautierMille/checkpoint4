import React from "react";
import { View, TextInput, Button, Text, Image } from "react-native";
import Vote from './Vote';

class PackageDetail extends React.Component {

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <View style={{ flexDirection: "row", flex: 1 }} onPress={() => this.props.navigation.navigate('Details')}
            >
                <View>
                    <Vote />
                </View>
                <View style={{ justifyContent: "flex-start", flex: 1, flexDirection: "column" }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'stretch', }}>Nom: {this.props.navigation.state.params.pack.name}</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'stretch', }}>Category: {this.props.navigation.state.params.pack.main_category_id}</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'stretch', }}>NPM: {this.props.navigation.state.params.pack.npm_link}</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'stretch', }}>Github: {this.props.navigation.state.params.pack.github_link}</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'stretch', }}>Info: {this.props.navigation.state.params.pack.info}</Text>
                </View>
            </View>
        )
    }
}
export default PackageDetail