
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
import FontAwsome from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient';



class MoreTicket extends React.Component {
    constructor() {
        super();
        this.state = {
           

        }
    }



    render() {
        // const { navigation } = this.props
        return (

            <LinearGradient colors={['#04a4df',  '#fff']} style={{ backgroundColor: "#04a4df", width: "100%", height: "100%", justifyContent: "space-evenly" }}>
             <TouchableOpacity style={{width:"95%",height:100,backgroundColor:"#fff",justifyContent:"center",flexDirection:"row",borderRadius:10,alignSelf:'center'}}>
             <FontAwsome name="instagram" size={30} color={"#04a4df"} style={{alignSelf:"center"}}/>
                 <Text style={{color:"#04a4df",paddingHorizontal:20,fontSize:15,textAlignVertical:"center"}}>
                     Follow us on Instagram to earn 2 extra tickets
                 </Text>
                 
                 </TouchableOpacity>   
            </LinearGradient>

        )


    }
}



const styles = StyleSheet.create({
  


});



export default MoreTicket

