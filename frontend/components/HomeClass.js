import React from "react";
import { View, TextInput, Button, Text, Image, ScrollView } from "react-native";
import axios from "axios";
import PackageView from "./PackageView"

class HomeClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            packages: []
        }
    }

    componentDidMount() {
        axios.get(`http://192.168.1.150:5050/packages`).then(({ data }) => {
            this.setState({ packages: data })
        })
            .catch((err) => console.log(err));
    }

    displayDetails = (packInfo) => {
        this.props.navigation.navigate("PackageDetail", packInfo)
        // console.log(packInfo)
    }
    render() {
        return (
            <ScrollView
                style={{ borderWidth: 10, borderColor: "black", borderStyle: "solid", alignSelf: 'stretch', }}
            >
                {this.state.packages.map(pack => <View style={{ flex: 1, marginBottom: 10, padding: 10, borderColor: "black", borderWidth: 2, borderStyle: "solid", alignSelf: 'stretch' }}><PackageView displayDetails={this.displayDetails} pack={pack} /></View>)}
            </ScrollView>
        );
    }
}
export default HomeClass