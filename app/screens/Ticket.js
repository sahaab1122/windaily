
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




class Ticket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets: ["123456"],



        }
    }




    render() {
        console.log(this.props.ticket, 'ticket')
        const { navigation } = this.props
        return (

            <LinearGradient colors={['#04a4df', '#fff']} style={{ width: "100%", height: "100%" }}>

                <Header navigation={navigation} />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Wheel')} style={{ position: "absolute", top: 13, right: 20 }}>

                    <Entypo name="calendar" color="#fff" size={30} />
                </TouchableOpacity >


                <ScrollView>


                <View style={{ width: "95%", minHeight: 110,  borderRadius: 9, alignSelf: "center", justifyContent: "space-evenly" }} >

                    {
                        this.props.ticket.map((item, index) =>
                        <View key={index} style={{ flexDirection: "row", alignSelf: "center",marginVertical:10,
                        //  backgroundColor: index === this.props.ticket.length - 1 ? "red" : "transparent"
                    }}>
                                {
                                    Array(6).fill().map((_, innerIndex) =>
                                    
                                    <ImageBackground key={innerIndex} source={require('../Assets/black.png')} style={{ margin: -10, width: 69, height: 50, textAlign: "center", borderRadius: 20, textAlignVertical: "center", fontSize: 25, }} >
                                            <Text style={{ color: "#fff", textAlign: 'center', textAlignVertical: "center", alignSelf: "center", marginTop: 12, fontSize: 25 }}>

                                                {item.charAt(innerIndex)}
                                            </Text>
                                        </ImageBackground>)
                                }
                            </View>


)
}


                </View >

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
        width: "70%"
    },


});

const mapState = state => {
    return {
        ticket: state.appReducer.ticket,
        // loading: state.globalReducer.loading,
        // token: state.authReducer.token,
        // user: state.authReducer.user,
    }
}
const mapDispatch = dispatch => {
    return {
        // _getFav: (token, uid) => dispatch(_getFavourite(token, uid)),
        setTicket: ticks => dispatch(set_ticket(ticks))

        // setLoading: bol => dispatch(set_loading(bol))
    }
}

export default connect(mapState, mapDispatch)(Ticket)

