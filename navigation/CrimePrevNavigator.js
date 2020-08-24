import { Platform, Text, View } from "react-native";
import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
import { createBottomTabNavigator } from "react-navigation-tabs";
// import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { Transition } from "react-native-reanimated";

import AddNewCameraScreen from "../screens/AddNewCameraScreen";
import CameraListScreen from "../screens/CameraListScreen";
import LiveVideoScreen from "../screens/LiveVideoScreen";
import RecentEventScreen from "../screens/RecentEventScreen";
import RecordVideoScreen from "../screens/RecordVideoScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import UserInfoScreen from "../screens/UserInfoScreen";

import Colors from "../constants/Colors";

const NewEventStack = createStackNavigator(
    {
        // 아래 코드가 shortcut(짧은 버전)
        RecentEventList: RecentEventScreen,
        // 아래 코드가 longer version
        RecordVideo: {
            screen: RecordVideoScreen,
        },
        // TODO 이렇게 겹쳐도 되는 건지? stack 관련해서 더 찾아보기: child 최대한 활용
        UserInfo: {
            screen: UserInfoScreen,
        },
    },
    {
        defaultNavigationOptions: {
            headerShown: false,
        },
    }
);

const CctvListStack = createStackNavigator(
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

const MainConfig = {
    NewEvent: {
        screen: NewEventStack,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                // color={tabInfo.tintColor}는 현재 tab의 tint된 color를 가져온다.
                return <Entypo name="new" size={24} color={tabInfo.tintColor} />;
            },
            tabBarColor: Colors.darkgrey,
            tabBarLabel:
                Platform.OS === "android" ? (
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontFamily: "hanna11" }}>최근알림</Text>
                    </View>
                ) : (
                    "최근알림"
                ),
        },
    },
    CctvList: {
        screen: CctvListStack,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                // color={tabInfo.tintColor}는 현재 tab의 tint된 color를 가져온다.
                return <MaterialIcons name="linked-camera" size={24} color={tabInfo.tintColor} />;
            },
            // tabBarColor: Colors.darkblue,
            tabBarLabel:
                Platform.OS === "android" ? (
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontFamily: "hanna11" }}>CCTVs</Text>
                    </View>
                ) : (
                    "CCTVs"
                ),
        },
    },
};

const MainStack =
    // Platform.OS === "android"
    //     ? createMaterialBottomTabNavigator(MainConfig, {
    //           activeColor: "grey",
    //           shifting: true,
    //           barStyle: {
    //               backgroundColor: Colors.darkgrey,
    //           },
    //       })
    //     :
    createBottomTabNavigator(MainConfig, { tabBarOptions: { activeTintColor: Colors.darkgrey } });

const AuthStack = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions: {},
        },
        Registeration: {
            screen: RegisterScreen,
            navigationOptions: {},
        },
    },
    {
        defaultNavigationOptions: {
            headerShown: false,
        },
    }
);

// react navigation은 appContainer을 만들어야 함.
export default createAppContainer(
    createAnimatedSwitchNavigator(
        {
            Auth: {
                screen: AuthStack,
                navigationOptions: {},
            },

            Main: {
                screen: MainStack,
                navigationOptions: {},
            },
        },
        {
            // The previous screen will slide to the bottom while the next screen will fade in
            transition: (
                <Transition.Together>
                    <Transition.Out type="slide-bottom" durationMs={400} interpolation="easeIn" />
                    <Transition.In type="fade" durationMs={500} />
                </Transition.Together>
            ),
        }
    )
);
