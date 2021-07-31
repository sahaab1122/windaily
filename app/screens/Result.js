
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




class Result extends React.Component {
    constructor() {
        super();
        this.state = {
            tickets: ["123456"],



        }
    }



    render() {
        return (

            <LinearGradient colors={['#04a4df',  '#fff']} style={{ width: "100%", height: "100%",  }}>
                <Header />


                <View style={{ width: "95%", height: 130, backgroundColor: "white", borderRadius: 9, alignSelf: "center", justifyContent: "space-evenly" }} >

                    {
                        this.state.tickets.map((item, index) =>
                            <View key={index} style={{ flexDirection: "row",alignSelf:"center" }}>
                                {
                                    Array(6).fill().map((_, innerIndex) =>

                                        <ImageBackground key={innerIndex} source={require('../Assets/black.png')} style={{margin: -10, width:69,height:50,textAlign:"center",borderRadius:20,textAlignVertical:"center",fontSize:25 }} >
                                          <Text style={{color:"#fff",textAlign:'center',textAlignVertical:"center",alignSelf:"center",marginTop:12,fontSize:25}}>
                                              
                                                {item.charAt(innerIndex)}
                                              </Text>
                                        </ImageBackground>)
                                }
                            </View>


                        )
                    }

                    <Text style={{ alignSelf: "center",fontSize:23,color:"#04a4df",fontWeight:"bold" }}>
                        Draw 677
                    </Text>
                    <Text style={{ alignSelf: "center",fontSize:15 ,color:"#04a4df"}}>
                        Prize:500$
                    </Text>
                    <Text style={{ alignSelf: "center",fontSize:10,color:"#04a4df" }}>
                       12 winners
                    </Text>
                </View >
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



export default Result

