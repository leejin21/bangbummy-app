import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

const UserInfoScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.h3}>UserInfo Screen</Text>
            {/* {console.log(props.navigation)} */}
            <Button title="LogIn Screen" onPress={() => props.navigation.navigate({ routeName: "Login" })}></Button>
            {/* <Button title="Main Screen" onPress={() => props.navigation.navigate({ routeName: "Main" })}></Button> */}
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

export default UserInfoScreen;
