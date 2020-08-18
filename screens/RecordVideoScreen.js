import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const RecentEventScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.h3}>Record Video Screen</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    h3: {
        fontFamily: "hannaLight",
        fontSize: 20,
    },
});

export default RecentEventScreen;