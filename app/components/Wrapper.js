import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Image, Platform, TouchableOpacity, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import AntDesign from 'react-native-vector-icons/AntDesign'



class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                {/* <ImageBackground source={require('../assets/backWhite.png')} resizeMode='stretch' style={{ width: '100%', height: heightPercentageToDP('100%'), position: 'absolute' }} /> */}

                <LinearGradient colors={['#04a4df', '#fff']} style={{ flex: 1, width: "100%", paddingTop: getStatusBarHeight() + 20 }}>

                    <View style={{ position: "absolute", zIndex: 100, width: "100%", paddingHorizontal: 20, flexDirection: "row", justifyContent: "space-between", paddingTop: getStatusBarHeight() + 20, }}>

                        <Text style={{ color: "#fff", fontSize: 15, fontWeight: 'bold', fontFamily: "Poppins-Regular" }}>
                            Balance 0$
                        </Text>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting')} style={{}}>
                            <AntDesign name="setting" size={30} color={"#fff"} />
                        </TouchableOpacity>

                    </View>

                    <Image source={require('../Assets/windailys.png')} style={{ width: "90%", alignSelf: "center", height: heightPercentageToDP(20), }} />



                    {
                        this.props.children
                    }


                </LinearGradient>
            </KeyboardAvoidingView >
        )
    }
}

export default Wrapper;