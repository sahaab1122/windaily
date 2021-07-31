
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
import LinearGradient from 'react-native-linear-gradient';




class Setting extends React.Component {
    
    

    





     
 

 
    render() {
        return (

     <LinearGradient colors={['#04a4df',  '#fff']} style={{backgroundColor:"#04a4df",width:"100%",height:"100%",justifyContent:"space-evenly"}}>


         <TouchableOpacity style={styles.text}>
            <Text style={{color:"white"}}>
                Contact us
            </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.text}>
            <Text style={{color:"white"}}>
                Rate us
            </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.text}>
            <Text style={{color:"white"}}>
                 Privacy Policy
            </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.text}>
            <Text style={{color:"white"}}>
                Terms Condition
            </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.text}>
            <Text style={{color:"white"}}>
                Invite Friends
            </Text>
         </TouchableOpacity>
         <Text style={{alignSelf:"center",justifyContent:"center",color:"#fff"}}>
             Your Referral Id: sahab
         </Text>
         <TouchableOpacity style={styles.text}>
            <Text style={{color:"white"}}>
                Follow us on Instagram
            </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.text}>
            <Text style={{color:"white"}}>
                Follow us on Facebook
            </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.text}>
            <Text style={{color:"white"}}>
                Withdraw your Balance
            </Text>
         </TouchableOpacity>
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
        backgroundColor: '#04a4df',
        borderRadius: 10,
        width: "70%"
    },
    
    
});



export default  Setting

