import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = (props) => {
    return (
        <View style={styles.comp}>
            <Text style={styles.headerTxt}>{props.title}</Text>
            {props.icon? 
            <TouchableOpacity style={styles.icon} onPress={() => props.userInfoHandler({ routeName: "UserInfo" })}>
                <Ionicons name="md-person" size={24} color="black" />
            </TouchableOpacity>
            : 
            <View></View>
            }
        </View>
    );
};
const styles = StyleSheet.create({
    comp: {
        width: "100%",
        alignContent: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "row",
        paddingTop: 50,
        paddingLeft: 15,
        paddingBottom: 10,
        marginBottom: 15,
        backgroundColor: "white",
        // borderBottomColor: "black",
        // borderBottomWidth: 1,
    },
    headerTxt: {
        fontFamily: "hanna11",
        fontSize: 30,
        flex: 10,
    },
    icon: {
        flex: 1,
    },
});

export default Header;
