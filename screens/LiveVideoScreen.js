import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";

import { Video } from "expo-av";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const font = windowHeight / 87;

const LiveVideoScreen = (props) => {
    const video_url = "https://r4---sn-i3belne6.googlevideo.com/videoplayback?expire=1606413832&ei=qJm_X_zlJuP-gAPpoKTACA&ip=183.98.214.161&id=o-ACdi4U80eHuWo9EER1WntX2sbgsopqqXf9U_wgN55H3A&itag=137&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=krtBlGsvmDF-KqcRZHWTCNAF&gir=yes&clen=1935129&otfp=1&dur=19.999&lmt=1540365453692109&fvip=4&keepalive=yes&beids=9466588&c=WEB&txp=2211222&n=css7XzEzfhQmMTC0UHt&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cotfp%2Cdur%2Clmt&sig=AOq0QJ8wRAIgY1iz-2HVIsWAARLSAVL9JaEM0vdBeJCKlWNLWOLD8fUCIGUSPPBir3a1F3JtVG5ZLyqBg3gyh8EVTExe_4F0aNwg&redirect_counter=1&rm=sn-3u-bh2ld7d&fexp=9466588&req_id=52a64e7a3190a3ee&cms_redirect=yes&ipbypass=yes&mh=ur&mm=30&mn=sn-i3belne6&ms=nxu&mt=1606391779&mv=m&mvi=4&pl=19&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgI4h7KBid75dg6VedAj3TGXSpFvrJLL-nTktDbvnTtucCIAuHePR5vW-ZdziLeTtF2BbvVHgEXV677Gxl1oopK4DM";
    return (
        <View style={styles.container}>
            <View style={styles.video__wrapper}>
                <View style={{ borderTopWidth: 0.75, borderBottomWidth: 0.75, borderColor: "grey",}}>
                    <Text style={styles.h3}>실시간 CCTV</Text>
                </View>
                <Video
                    // TODO mp4 아닌 확장자 어떻게 할 지 고민하기
                    source={{ uri: video_url}}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    shouldPlay={true}
                    resizeMode="cover"
                    isLooping={false}
                    useNativeControls
                    // style={Platform.OS === 'ios'? styles.video__ios : styles.video__android} 
                    style={{ width: windowWidth, height: font*27, marginTop: 5 }}
                ></Video>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black"
    },
    video__wrapper: {
        // flex: 12,
        // alignItems: "center",
        justifyContent: "center",
        width: "100%",
        borderColor: "grey",
        paddingBottom: 5,
        borderBottomWidth: 0.75,
    },
    h3: {
        fontFamily: "hannaLight",
        fontSize: 20,
        margin: 5,
        color: "white",
        
    },
});

export default LiveVideoScreen;
