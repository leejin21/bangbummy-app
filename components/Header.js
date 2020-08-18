import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props) => {
    return (
        <View style={styles.comp}>
            <Text style={styles.headerTxt}>방버미</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    comp: {
        flex: 1,
        width: "100%",
        alignContent: "flex-start",
        justifyContent: "center",
        paddingTop: 30,
        paddingLeft: 15,
    },
    headerTxt: {
        fontFamily: "hanna11",
        fontSize: 30,
    },
});

export default Header;
