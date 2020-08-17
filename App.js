import React from "react";
import { AppLoading } from "expo";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";

import Header from "./components/Header";

export default function App() {
    const [loaded] = useFonts({
        hanna11: require("./assets/fonts/hanna11.ttf"),
        hannaLight: require("./assets/fonts/hannalight.ttf"),
    });

    if (!loaded) {
        return <AppLoading></AppLoading>;
    }

    return (
        // TODO 1. navigator 만들고, 2. 아래 View component 그대로 mainScreen에 옮기기
        <View style={styles.container}>
            <View style={styles.comp}>
                <Text style={styles.headerTxt}>방버미</Text>
            </View>
            <View style={styles.contents}>
                <Text style={styles.h3}>최근 방범 알림</Text>
                <View style={styles.board}>
                    <TouchableOpacity style={styles.listitem}>
                        <Text style={{ ...styles.context, fontSize: 12 }}>08.05 17:10:32</Text>
                        <Text style={styles.context}>미등록 개체가 2번 카메라에 감지되었습니다. </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ ...styles.context, fontSize: 12 }}>08.07 20:09:23</Text>
                        <Text style={styles.context}>미등록 개체가 2번 카메라에 감지되었습니다. </Text>
                    </TouchableOpacity>
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
    listitem: {
        marginVertical: 3,
    },
    context: {
        fontFamily: "hannaLight",
        fontSize: 15,
        color: "#5b5b5b",
    },
});
