import { Platform } from "react-native";
import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

import AddNewCameraScreen from "../screens/AddNewCameraScreen";
import CameraListScreen from "../screens/CameraListScreen";
import LiveVideoScreen from "../screens/LiveVideoScreen";
import RecentEventScreen from "../screens/RecentEventScreen";
import RecordVideoScreen from "../screens/RecordVideoScreen";
import RegisterScreen from "../screens/RegisterScreen";

const NewEventNavigator = createStackNavigator(
    {
        // 아래 코드가 shortcut(짧은 버전)
        RecentEventList: RecentEventScreen,
        // 아래 코드가 longer version
        RecordVideo: {
            screen: RecordVideoScreen,
        },
    },
    {
        defaultNavigationOptions: {
            headerShown: false,
        },
    }
);

const CctvListNavigator = createStackNavigator(
    {
        CameraList: CameraListScreen,
        LiveVideo: LiveVideoScreen,
        AddNewCamera: AddNewCameraScreen,
    },
    {
        defaultNavigationOptions: {
            headerShown: false,
        },
    }
);

const CrimePrevNavigator = createBottomTabNavigator({
    NewEvent: {
        screen: NewEventNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                // color={tabInfo.tintColor}는 현재 tab의 tint된 color를 가져온다.
                return <Entypo name="new" size={24} color="black" />;
            },
            // tabBarColor: Colors.primary,
            tabBarLabel: Platform.OS === "android" ? <Text style={{ fontFamily: "hanna11" }}>최근알림</Text> : "최근알림",
        },
    },
    CctvList: {
        screen: CctvListNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                // color={tabInfo.tintColor}는 현재 tab의 tint된 color를 가져온다.
                return <MaterialIcons name="linked-camera" size={24} color="black" />;
            },
            // tabBarColor: Colors.primary,
            tabBarLabel: Platform.OS === "android" ? <Text style={{ fontFamily: "hanna11" }}>CCTVs</Text> : "CCTVs",
        },
    },
});

// react navigation은 appContainer을 만들어야함.
export default createAppContainer(CrimePrevNavigator);
