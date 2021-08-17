import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default (props) => {
    return (



      <View style={{width:"100%",height:55,backgroundColor:'#04a4df',justifyContent:"center",shadowOpacity: 0,
      shadowRadius: 4.65,}}>
         <TouchableOpacity onPress={()=> this.props.naviagtion.goBack()} style={{paddingLeft:20}}>
             

           <Ionicons name="arrow-back-sharp" size={30} color="white" />
         </TouchableOpacity>
           

      </View>
    )
}

const styles = StyleSheet.create({

    inputfield: {
        width: '90%',
        height: 43,
        borderRadius: 3,
        backgroundColor: '#F5F8FA',
        borderColor: '#97aabd',
        borderWidth: 1,
        padding: 0, margin: 0,
        
        marginTop: 20,
        color: "#97AABD",
        alignSelf: 'center', 
        alignItems: 'flex-start',
        paddingHorizontal:10,
        fontFamily: "Poppins-Regular" 
        





    },






});