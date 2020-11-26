import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import Header from "../components/Header";

import {cameras} from "./CameraListScreen";

const RecentEventScreen = (props) => {
    const [building, setBuilding] = useState('');
    const [floor, setFloor] = useState('');
    const [num, setNum] = useState('');
    return (
        <View style={styles.container}>
            <Header title={'방버미'}></Header>
            <View style={styles.contents}>
                <Text style={styles.h3}>카메라 추가</Text>
                <View style={styles.addcamera_view}>
                    <View style={styles.addcamera_wrapper}>
                        <Text style={styles.addcamera_text}>빌딩</Text>
                        <TextInput 
                            style={styles.addcamera_input}
                            onChangeText={building => setBuilding(building)}
                            value={building}
                        ></TextInput>
                    </View>
                    <View style={styles.addcamera_wrapper}>
                        <Text style={styles.addcamera_text}>층수</Text>
                        <TextInput 
                            style={styles.addcamera_input}
                            onChangeText={floor => setFloor(floor)}
                            value={floor}
                        ></TextInput>
                    </View>
                    <View style={styles.addcamera_wrapper}>
                        <Text style={styles.addcamera_text}>번호</Text>
                        <TextInput 
                            style={styles.addcamera_input}
                            onChangeText={num => setNum(num)}
                            value={num}
                        ></TextInput>
                    </View>
                    <View style={styles.button_wrapper}>
                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={() => {}}>
                            <Text style={styles.button_text}>바코드 인식</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={() => {
                                cameras.push({name: building+" "+floor+"층-"+num})
                                return props.navigation.navigate({ routeName: "CameraList" });
                            }}>
                            <Text style={styles.button_text}>카메라 추가</Text>
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
    },
    h3: {
        fontFamily: "hanna11",
        fontSize: 25,
        marginTop: 20,
    },
    contents: {
        flex: 10,
        width: "100%",
        paddingHorizontal: 20,
        // justifyContent: "flex-end",
        // backgroundColor: "pink",
    },

    addcamera_view: {
        // marginVertical: 20,
        borderTopColor: "black",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        borderRadius: 20,
        padding: 10,
        marginTop: 50,
        // backgroundColor: "purple",
        height: "65%",
        justifyContent: "space-around",
    },
    addcamera_wrapper: {
        flexDirection: 'row',
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    addcamera_text: {
        fontFamily: "hannaLight",
        marginHorizontal: 10,
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 25, 
        flex: 2
    },
    addcamera_input: {
        borderColor: 'gray', 
        // borderWidth: 1, 
        flex: 11,
        backgroundColor: "white",
        borderRadius: 20,
        height: "100%",
        fontSize: 17,
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
        flex: 3
    }
    
});

export default RecentEventScreen;
