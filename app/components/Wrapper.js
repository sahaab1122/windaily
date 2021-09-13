import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Image, Platform, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
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

                <LinearGradient colors={['#04a4df',  '#fff']} style={{ flex: 1,width:"100%" }}>
                    <View style={{width:"90%",height:200,justifyContent:"center",alignSelf:"center"}}>


                    <Image source={require('../Assets/windailys.png')} style={{ width: "100%",height:200, alignSelf: "center" }} />
                    </View>
                    {
                        this.props.children
                    }
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting')} style={{ position: "absolute", top: 40, right: 10 }}>
                        <AntDesign name="setting" size={30} color={"#fff"} />
                    </TouchableOpacity>


                </LinearGradient>
            </KeyboardAvoidingView >
        )
    }
}

export default Wrapper;