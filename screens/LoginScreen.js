import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { TextInput } from "react-native-paper";
import { set } from "react-native-reanimated";
import { back } from "react-native/Libraries/Animated/src/Easing";

const LoginScreen = (props) => {
    const [id, setId] = React.useState('');
    const [pw, setPw] = React.useState('');
    return (
        <View style={styles.container}>
            <View style={{flex:1, marginTop: 100,}}>
                <Text style={styles.h3}>방버미</Text>
            </View>
            <View style={{flex: 5, width: "100%", padding: 23, paddingVertical: 50}}>
                <View style={styles.login_view}>
                    <View style={styles.login_wrapper}>
                        <Text style={styles.login_text}>ID</Text>
                        <TextInput 
                            style={styles.login_input}
                            onChangeText={text => setId(text)}
                            value={id}
                        ></TextInput>
                    </View>
                    <View style={styles.login_wrapper}>
                        <Text style={styles.login_text}>PW</Text>
                        <TextInput 
                            style={styles.login_input}
                            onChangeText={text => setPw(text)}
                            value={pw}
                            secureTextEntry
                        ></TextInput>
                    </View>
                    <View style={styles.button_wrapper}>
                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={() => props.navigation.navigate({ routeName: "Main" })}>
                            <Text style={styles.button_text}>로그인</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={() => props.navigation.navigate({ routeName: "Registeration" })}
                            >
                                <Text style={styles.button_text}>회원가입</Text>
                        </TouchableOpacity>
                    </View>
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
        backgroundColor: "white",
    },
    h3: {
        fontFamily: "hanna11",
        fontSize: 50,
        // marginHorizontal: 30,
        // marginTop: 100,
        textAlign: "center",
    },
    login_view: {
        borderTopColor: "black",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        borderRadius: 20,
        padding: 10,
    },
    login_wrapper: {
        flexDirection: 'row',
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    login_text: {
        fontFamily: "hannaLight",
        marginHorizontal: 10,
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 25, 
        flex: 2
    },
    login_input: {
        borderColor: 'gray', 
        // borderWidth: 1, 
        flex: 11,
        backgroundColor: "white",
        borderRadius: 20,
    },
    button: {
        marginHorizontal: 15,
        marginVertical: 10,
        backgroundColor: "white",
        paddingVertical: 10,
        borderRadius: 20,
        borderWidth: 0.75,
        borderColor: "grey"
    },
    button_text: {
        fontFamily: "hannaLight",
        fontSize: 30,
        textAlign: "center",
    },
    button_wrapper:{
        margin: 10,
    }
    

});

export default LoginScreen;
