import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import Header from "../components/Header";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

const cameras = [
    {name: "과학관 1층-1"},
    {name: "과학관 1층-2"},
    {name: "과학관 1층-3"},
    {name: "과학관 2층-1"},
    {name: "과학관 2층-2"},
    {name: "백주념기념관 1층-1"},
    {name: "백주념기념관 1층-2"},
    {name: "백주념기념관 1층-3"},
    {name: "백주념기념관 1층-4"},
    {name: "명신관 1층-1"},
    {name: "명신관 1층-2"},
    {name: "명신관 2층-1"},
    {name: "명신관 2층-2"},
];

const RecentEventScreen = (props) => {
    return (
        <View style={styles.container}>
            <Header title={'방버미'}></Header>
            <View style={styles.contents}>
                <Text style={styles.h3}>CCTVs</Text>
                <View style={styles.board}>
                    <FlatList
                        key={"_"}
                        data={cameras}
                        renderItem={({item}) => {
                            return <TouchableOpacity style={styles.listitem} onPress={() => props.navigation.navigate({ routeName: "LiveVideo" })}>
                                <MaterialIcons name="linked-camera" size={25} color='black' style={styles.icon}/>
                                <Text style={styles.context}>{item.name}</Text>
                                <Text style={styles.context}>카메라</Text>
                            </TouchableOpacity>;
                        }}
                        extraData={cameras}
                        keyExtractor={(item, index) => index.toString()}
                        style={{height: "75%"}}
                        >
                    </FlatList>
                    <View style={styles.button_wrapper}>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={() => props.navigation.navigate({ routeName: "AddNewCamera" })}
                            >
                                <Text style={styles.button_text}>카메라 추가하기</Text>
                                
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={() => {}}
                            >
                                <Text style={styles.button_text}>카메라 삭제하기</Text>
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
    contents: {
        flex: 10,
        width: "100%",
        paddingHorizontal: 20,
    },
    board: {
        margin: 5,
        padding: 5,
        elevation: 1,
    },
    h3: {
        fontFamily: "hanna11",
        fontSize: 25,
    },
    listitem: {
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "grey",
        borderBottomWidth: 0.5,
    },
    context: {
        fontFamily: "hannaLight",
        fontSize: 20,
        color: "#5b5b5b",
        marginRight: 5,
    },
    icon: {
        paddingHorizontal: 5,
        marginRight: 5
    },
    button: {
        marginHorizontal: 15,
        marginVertical: 10,
        // backgroundColor: "white",
        paddingVertical: 10,
        // borderRadius: 20,
        borderTopWidth: 0.75,
        borderBottomWidth: 0.75,
        borderColor: "grey"
    },
    button_text: {
        fontFamily: "hannaLight",
        fontSize: 22,
        textAlign: "center",
    },
    button_wrapper:{
        margin: 10,
        // alignItems: "center",
        justifyContent: "center",
    }
    

});

export default RecentEventScreen;
export {cameras};