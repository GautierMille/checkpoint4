import React from "react";
import { View, TextInput, Button, Text, Image } from "react-native";
import Vote from './Vote';

class PackageDetail extends React.Component {

    render() {
        return (
            <View>
                <View style={{ flexDirection: "row", marginBottom: 10, backgroundColor: "black", alignItems: "center", justifyContent: "center" }}>
                    <Image source={require("../assets/react.png")} style={{ height: 40, width: 40 }} />
                    <Text style={{ color: "white", fontSize: 18 }}>React Choice</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center" }} onPress={() => this.props.navigation.navigate('Details')}
                >
                    <View style={{ flexDirection: "column" }}>
                        <Vote id={this.props.navigation.state.params.pack.id} />
                    </View>
                </View>
                <View style={{ justifyContent: "flex-start", flex: 1, flexDirection: "column" }}>
                    <Text style={{ paddingTop: 10, paddingBottom: 10, fontSize: 20, fontWeight: 'bold', alignSelf: 'stretch', }}>Nom: {this.props.navigation.state.params.pack.name}</Text>
                    <Text style={{ paddingBottom: 10, fontSize: 20, fontWeight: 'bold', alignSelf: 'stretch', }}>Category: {this.props.navigation.state.params.pack.main_category_id}</Text>
                    <Text style={{ paddingBottom: 10, fontSize: 20, fontWeight: 'bold', alignSelf: 'stretch', }}>NPM: {this.props.navigation.state.params.pack.npm_link}</Text>
                    <Text style={{ paddingBottom: 10, fontSize: 20, fontWeight: 'bold', alignSelf: 'stretch', }}>Github: {this.props.navigation.state.params.pack.github_link}</Text>
                    <Text style={{ paddingBottom: 10, fontSize: 20, fontWeight: 'bold', alignSelf: 'stretch', }}>Info: {this.props.navigation.state.params.pack.info}</Text>
                </View>
            </View>

        )
    }
}
export default PackageDetail