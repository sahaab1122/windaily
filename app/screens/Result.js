
import React from 'react';
// import { FontAwesome } from '@expo/vector-icons';
import { ImageBackground, uri, StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView, ActivityIndicator } from 'react-native';
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
import { Carousal } from '../components/Carousel';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { _getWinner } from '../store/middlewares/appMiddleware';




class Result extends React.Component {
    constructor() {
        super();
        this.state = {
            tickets: [""],



        }
    }

    componentDidMount() {
        this.getwinner()
    }
    getwinner = () => {

        // this.props.setLoading(true)
        this.props._getWinner()


    }




    render() {
        console.log(this.props.winner)
        return (

            <LinearGradient colors={['#04a4df', '#fff']} style={{ width: "100%", height: "100%", }}>
                <Header />
                <ScrollView>




                    {
                        this.props.winner.map((winner, index) =>
                            <View key={index} style={{ width: "95%", height: 120, marginVertical: 10, backgroundColor: "white", borderRadius: 9, alignSelf: "center", alignItems: "center" }}>
                                <View style={{ flexDirection: "row", }}>
                                    {
                                        Array(6).fill().map((_, innerIndex) =>

                                            <ImageBackground key={innerIndex} source={require('../Assets/black.png')} style={{ margin: -10, width: 70, height: 70, justifyContent: "center" }} >
                                                <Text style={{ color: "#fff", textAlign: 'center', fontSize: 25,fontFamily: "Poppins-Regular" }}>

                                                    {winner.ticket.charAt(innerIndex)}
                                                </Text>
                                            </ImageBackground>)
                                    }
                                </View>
                                <Text style={{ fontSize: 23, color: "#04a4df", fontWeight: "bold",fontFamily: "Poppins-Regular"  }}>
                                    {winner.user.name}
                                </Text>
                                <Text style={{ fontSize: 15, color: "#04a4df" ,fontFamily: "Poppins-Regular" }}>
                                    Prize:500$
                                </Text>
                                {/* <Text style={{ fontSize: 10, color: "#04a4df" }}>
                                    12 winners
                                </Text> */}

                            </View>

                        )

                    }

                </ScrollView>
            </LinearGradient>

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
        height: 43,
        backgroundColor: 'blue',
        borderRadius: 10,
        width: "70%",
        fontFamily: "Poppins-Regular" 
    },


});




const mapState = state => {
    return {
        winner: state.appReducer.winner,

    }
}
const mapDispatch = dispatch => {
    return {
        _getWinner: () => dispatch(_getWinner())


    }
}
export default connect(mapState, mapDispatch)(Result)
