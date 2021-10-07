
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
import { _getPrizes } from '../store/middlewares/appMiddleware';
const { width, height } = Dimensions.get('window');

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            modalState: true,
            size: { width, height }, modalVisible: false
        }
    }
    // async componentDidMount() {
    //     await this.props._getPrizes()


    // }
    _onLayoutDidChange = (e) => {
        const layout = e.nativeEvent.layout;
        this.setState({ size: { width: layout.width, height: layout.height } });
    }

    async componentDidMount() {
        if (!this.props.tier) {
            this.setState({ modalVisible: true })

        } 
        let res = await this.props._getPrizes()
        console.log(this.props.prizes)


    }




    render() {
        console.log(this.props.tier, "tierrrr")

        const { navigation } = this.props

        return (

            <Wrapper navigation={navigation} onLayout={this._onLayoutDidChange} >
                <View style={{ position: "absolute", alignSelf: "center", justifyContent: "center", paddingVertical: 9 }}>

                    <Text style={{ color: "#fff", fontSize: 15, fontWeight: 'bold', fontFamily: "Poppins-Regular" }}>
                        Balance
                    </Text>
                    <Text style={{ alignSelf: "center", color: "#fff", fontWeight: "bold", fontFamily: "Poppins-Regular" }}>
                        0$
                    </Text>
                </View>

                <Carousel
                    delay={5000}
                    style={{ width: "90%", height: 200, alignSelf: "center" }}
                    autoplay
                    pageInfo

                >
                    {/* {
                            this.props.items.map((item, index) =>
                                <Card navigation={this.props.navigation} item={item} key={index} />

                            )
                        } */}
                    {this.props.prizes.length < 1 ?
                        <Image source={require("../Assets/amazon15.png")} style={{ height: 200, width: widthPercentageToDP(90) }}></Image>
                        :
                        this.props.prizes.map((prize, index) =>
                            <Image source={{ uri: prize.image[0] }} key={index} style={{ height: 200, width: widthPercentageToDP(90) }}></Image>
                        )}
                    {/* <Image source={require("../Assets/amazon25.png")} style={{ height: 200, width: widthPercentageToDP(90) }}></Image> */}
                    {/* <Image source={require("../Assets/amazon50.png")} style={{ height: 200, width: widthPercentageToDP(90) }}></Image> */}
                    {/* <Image source={require("../Assets/amazon100.png")} style={{ height: 200, width: widthPercentageToDP(90) }}></Image> */}
                    {/* <View style={{ backgroundColor: '#04a4df',width:widthPercentageToDP(90)  } }><Text>3</Text></View> */}
                </Carousel>
                <View style={{ flex: 1, justifyContent: "space-evenly" }}>

                    {/* <Text style={{ justifyContent: "center", fontSize: 26, alignSelf: "center", color: "#fff" }}>
                        Draw 678
                    </Text> */}
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AddTicket')} style={styles.text}>
                        <Text style={{ color: "#fff", fontSize: 20, fontFamily: "Poppins-Regular" }}>
                            Get a Ticket
                        </Text>


                    </TouchableOpacity>
                    <Text style={{ fontSize: 13, justifyContent: "center", alignSelf: 'center', color: "#04a4df", fontFamily: "Poppins-Regular" }}>
                        48 Ticket Avaliable
                    </Text>


                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MoreTicket')} style={{ alignSelf: "center", width: "40%", height: 30, borderColor: "#04a4df", borderWidth: 2, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ alignSelf: 'flex-end', fontFamily: "Poppins-Regular", textAlignVertical: "center", alignSelf: "center", color: '#04a4df' }}>
                            Get more tickets
                        </Text>
                    </TouchableOpacity>

                </View>
                {
                    this.props.tier === false &&
                    <Modal visible={this.state.modalState} animationType='slide' >
                        <Tier hideModal={() => this.setState({ modalState: !this.state.modalState })} navigation={this.props.navigation} />
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
        fontFamily: "Poppins-Regular"

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






