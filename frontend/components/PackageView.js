import React from "react";
import { View, TextInput, Button, Text, Image, TouchableOpacity } from "react-native";
import Vote from './Vote';

class PackageView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation
        }
    }
    // componentDidMount() {
    //     console.log(this.props)
    // }



    render() {
        const displayDetails = this.props.displayDetails
        return (
            <View style={{ flexDirection: "row", flex: 1 }} >
                <TouchableOpacity style={{ justifyContent: "flex-start", flex: 1, flexDirection: "column" }} onPress={() => displayDetails(this.props)} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'stretch', }}>Nom: {this.props.pack.id}</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'stretch', }}>Category: {this.props.pack.main_category_id}</Text>
                </TouchableOpacity>
                <View style={{ justifyContent: "flex-end" }}>
                    <Vote />
                </View>
            </View >
        )
    }
}
export default PackageView