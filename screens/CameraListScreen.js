import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

const RecentEventScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.h3}>Camera List Screen</Text>
            <Button title="Go to live video" onPress={() => props.navigation.navigate({ routeName: "LiveVideo" })}></Button>
            <Button title="Go to add Camera" onPress={() => props.navigation.navigate({ routeName: "AddNewCamera" })}></Button>
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
