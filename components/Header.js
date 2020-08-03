import React from "./node_modules/react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props) => {
    return (
        <View sytle={styles.comp}>
            <Text style={{ ...styles.headerTxt, ...props.titleStyle }}>{props.children}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    comp: {
        flex: 1,
        width: "100%",
        backgroundColor: "red",
        alignContent: "flex-start",
    },
    headerTxt: {
        fontFamily: "hanna11",
        fontSize: 30,
    },
});

export default Header;
