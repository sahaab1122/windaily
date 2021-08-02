
import React from 'react';
// import { FontAwesome } from '@expo/vector-icons';
import { ImageBackground, uri, StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView, ActivityIndicator, Modal } from 'react-native';
import Wrapper from '../components/Wrapper';
// import Middle from '../component/Middle';
// import Btn from '../component/Btn';
// import Lets from '../component/Lets';
// import Inputfield from '../components/Inputfield';
// import api from '../api/api';
// import path from '../api/path';
// import { _login } from '../store/middlewares/authMiddleware';
// import { connect } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
// import { Carousal } from '../components/Carousel';
import { color } from 'react-native-reanimated';

import Carousel from 'react-native-looped-carousel'
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import Tier from './Tier';
const { width, height } = Dimensions.get('window');

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            size: { width, height }, modalVisible: false
        }
    }
    _onLayoutDidChange = (e) => {
        const layout = e.nativeEvent.layout;
        this.setState({ size: { width: layout.width, height: layout.height } });
    }

    componentDidMount() {
        if (this.props.tier === false) {
            this.setState({ modalVisible: true })

        }
    }



    render() {

        const { navigation } = this.props

        return (

            <Wrapper navigation={navigation} onLayout={this._onLayoutDidChange} >
                <View style={{ position: "absolute", alignSelf: "center", justifyContent: "center", paddingVertical: 9 }}>

                    <Text style={{ color: "#fff", fontSize: 15, fontWeight: 'bold' }}>
                        Balance
                    </Text>
                    <Text style={{ alignSelf: "center", color: "#fff", fontWeight: "bold" }}>
                        0$
                    </Text>
                </View>

                <Carousel
                    delay={5000}
                    style={{ width: "90%", height: 200, alignSelf: "center" }}
                    autoplay
                    pageInfo
                    onAnimateNextPage={(p) => console.log(p)}
                >
                    <Image source={require("../Assets/amazon15.png")} style={{ height: 200, width: widthPercentageToDP(90) }}></Image>
                    <Image source={require("../Assets/amazon25.png")} style={{ height: 200, width: widthPercentageToDP(90) }}></Image>
                    <Image source={require("../Assets/amazon50.png")} style={{ height: 200, width: widthPercentageToDP(90) }}></Image>
                    <Image source={require("../Assets/amazon100.png")} style={{ height: 200, width: widthPercentageToDP(90) }}></Image>
                    {/* <View style={{ backgroundColor: '#04a4df',width:widthPercentageToDP(90)  } }><Text>3</Text></View> */}
                </Carousel>
                <View style={{ flex: 1, justifyContent: "space-evenly" }}>

                    <Text style={{ justifyContent: "center", fontSize: 26, alignSelf: "center", color: "#fff" }}>
                        Draw 678
                    </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AddTicket')} style={styles.text}>
                        <Text style={{ color: "#fff", fontSize: 20 }}>
                            Get a Ticket
                        </Text>


                    </TouchableOpacity>
                    <Text style={{ fontSize: 13, justifyContent: "center", alignSelf: 'center', color: "#04a4df" }}>
                        48 Ticket Avaliable
                    </Text>


                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MoreTicket')} style={{ alignSelf: "center", width: "40%", height: 30, borderColor: "#04a4df", borderWidth: 2, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ alignSelf: 'flex-end', textAlignVertical: "center", alignSelf: "center", color: '#04a4df' }}>
                            Get more tickets
                        </Text>
                    </TouchableOpacity>

                </View>
                {
                    this.props.tier === false &&
                    <Modal visible={true} animationType='slide' >
                        <Tier />
                    </Modal>
                }


            </Wrapper >

        )


    }
}

const styles = StyleSheet.create({
    text: {
        alignItems: 'center',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        height: 53,
        backgroundColor: '#04a4df',
        borderRadius: 10,
        width: "70%",

    },


});
const mapState = state => {
    return {
        //   logged: state.authReducer.logged,

        prizes: state.appReducer.prizes,
        tier: state.appReducer.tier

    }
}
const mapDispatch = dispatch => {
    return {

        _getPrizes: () => dispatch(_getPrizes()),



    }
}
export default connect(mapState, mapDispatch)(Home)






