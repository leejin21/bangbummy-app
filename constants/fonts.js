import { useFonts } from "expo-font";

export default function fonts() {
    const [loaded] = useFonts({
        hanna11: require("./assets/fonts/hanna11.ttf"),
        hannaLight: require("./assets/fonts/hannalight.ttf"),
    });

    if (!loaded) {
        return null;
    }
}
