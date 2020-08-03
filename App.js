import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

import Header from "./components/Header";

export default function App() {
    const [loaded] = useFonts({
        hanna11: require("./assets/fonts/hanna11.ttf"),
        hannaLight: require("./assets/fonts/hannalight.ttf"),
    });

    if (!loaded) {
        return null;
    }

    return (
        // TODO: 1. navigator 만들고, 2. 아래 View component 그대로 mainScreen에 옮기기
        <View style={styles.container}>
            <View style={styles.comp}>
                <Text style={styles.headerTxt}>방버미</Text>
            </View>
            <View style={styles.contents}>
                <Text style={styles.h3}>최근 방범 알림</Text>
                <View style={styles.board}>
                    <Text style={styles.context}>미등록 개체가 2번 카메라에 감지되었습니다. </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
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
    context: {
        fontFamily: "hannaLight",
        fontSize: 15,
        color: "#5b5b5b",
    },
});
