import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import Header from "../components/Header";



const UserInfoScreen = (props) => {
    const resetToLogin = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Login" })],
    });

    return (
        <View style={styles.container}>
            <Header title="프로필" ></Header>
            <View style={{flex:10, width: "100%"}}>
                <View style={styles.profile_wrapper}>
                    <Image source={require('../assets/barcode.jpg')} style={{resizeMode: "stretch", width: 300, height: 200, marginVertical: 30, flex: 2}}></Image>
                    <View style={{width: "100%", paddingHorizontal: 50, flex: 3}}>
                        <View style={styles.info_wrapper}>
                            <Text style={styles.info_text1}>이름</Text>
                            <Text>|</Text>
                            <Text style={styles.info_text2}>홍길동</Text>
                        </View>
                        <View style={styles.info_wrapper}>
                            <Text style={styles.info_text1}>소속</Text>
                            <Text>|</Text>
                            <Text style={styles.info_text2}>B팀</Text>
                        </View>
                        <View style={styles.info_wrapper}>
                            <Text style={styles.info_text1}>직급</Text>
                            <Text>|</Text>
                            <Text style={styles.info_text2}>대리</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => props.navigation.navigate({ routeName: "Auth" })}>
                            <Text style={styles.button_text}>로그아웃</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => props.navigation.navigate({ routeName: "Auth" })}
                    >
                        <Text style={styles.button_text}>탈퇴</Text>
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

    h3: {
        fontFamily: "hannaLight",
        fontSize: 20,
    },
    profile_wrapper: {
        flex: 3, 
        borderColor: "grey", 
        borderRadius: 30, 
        borderWidth: 1, 
        margin: 15, 
        backgroundColor: "white",
        alignItems: "center",
        padding: 20
        // justifyContent: "center",
    },
    info_wrapper: {
        flexDirection: "row",
        padding: 10,
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "purple"
    },
    info_text1: {
        fontFamily: "hannaLight",
        fontSize: 25,
        marginRight: 20,
        textAlign: "right",
        backgroundColor: "white",
        flex: 1,
    },
    info_text2: {
        fontFamily: "hannaLight",
        fontSize: 25,
        marginLeft: 20,
        backgroundColor: "white",
        flex: 1,
    },
    button: {
        marginHorizontal: 15,
        marginVertical: 10,
        backgroundColor: "white",
        paddingVertical: 15,
        borderRadius: 20,
        borderWidth: 0.75,
        borderColor: "grey"
    },
    button_text: {
        fontFamily: "hannaLight",
        fontSize: 25,
        textAlign: "center",
    },
    button_wrapper:{
        margin: 10,
    }
});

export default UserInfoScreen;
