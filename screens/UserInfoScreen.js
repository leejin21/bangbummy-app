import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

const UserInfoScreen = (props) => {
    const resetToLogin = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Login" })],
    });

    return (
        <View style={styles.container}>
            <Text style={styles.h3}>UserInfo Screen</Text>
            {/* {console.log(props.navigation.getChildNavigation)} */}

            <Button title="로그아웃" onPress={() => props.navigation.navigate({ routeName: "Auth" })}></Button>
            <Button title="탈퇴" onPress={() => props.navigation.navigate({ routeName: "Auth" })}></Button>

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
