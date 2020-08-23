import React from "react";
import { AppLoading } from "expo";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";

import CrimePrevNavigator from "./navigation/CrimePrevNavigator";
import RecentEventScreen from "./screens/RecentEventScreen";

export default function App() {
    const [loaded] = useFonts({
        hanna11: require("./assets/fonts/hanna11.ttf"),
        hannaLight: require("./assets/fonts/hannalight.ttf"),
    });

    if (!loaded) {
        return <AppLoading></AppLoading>;
    }

    return <CrimePrevNavigator></CrimePrevNavigator>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    contents: {
        flex: 10,
        width: "100%",
        paddingHorizontal: 20,
    },
    h3: {
        fontFamily: "hannaLight",
        fontSize: 20,
    },
    board: {
        margin: 5,
        padding: 5,
        elevation: 1,
    },
    listitem: {
        marginVertical: 3,
    },
    context: {
        fontFamily: "hannaLight",
        fontSize: 15,
        color: "#5b5b5b",
    },
});
