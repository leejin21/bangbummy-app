import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

const RecentEventScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.h3}>Register, Login Screen</Text>
            <Text style={styles.h3}>Hellooo</Text>
            <Button title="Done register, go to main" onPress={() => props.navigation.navigate({ routeName: "Main" })}></Button>
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
