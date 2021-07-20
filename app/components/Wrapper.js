import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Image,Platform, ScrollView, ImageBackground } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
 

 

class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{ flex: 1, }} >
                {/* <ImageBackground source={require('../assets/backWhite.png')} resizeMode='stretch' style={{ width: '100%', height: heightPercentageToDP('100%'), position: 'absolute' }} /> */}
                    
                <View style={{ flex: 1, }}>
                    <Image source={require('../Assets/windaily.png')} style={{width:"90%",height:"25%",alignSelf:"center"}} />
                    {
                        this.props.children
                    }



                </View>
            </KeyboardAvoidingView >
        )
    }
}

export default Wrapper;