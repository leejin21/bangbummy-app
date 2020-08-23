import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "../components/Header";

const RecentEventScreen = (props) => {
    return (
        <View style={styles.container}>
            <Header userInfoHandler={props.navigation.navigate}></Header>
            <View style={styles.contents}>
                <Text style={styles.h3}>최근 방범 알림</Text>
                <View style={styles.board}>
                    <TouchableOpacity style={styles.listitem} onPress={() => props.navigation.navigate({ routeName: "RecordVideo" })}>
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
};
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
        fontFamily: "hanna11",
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

export default RecentEventScreen;
