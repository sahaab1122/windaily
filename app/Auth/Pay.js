
import React from 'react';

import { ImageBackground, uri, StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';

 
// import api from '../api/api';
// import path from '../api/path';

class Pay extends React.Component {

  
    constructor() {
        super();
        this.state = {
            

        }
    }
    addToReduc = async () => {

       
      




    }

    registerHandler = async (e) => {
        e.preventDefault()
        if (this.state.password !== this.state.confirmPassword) {
            return alert('Password not match')
        }
        // this.props.setLoading(true)
        let user = {
            firstName: this.state.name.trim(),
       
            phone: this.state.phone.trim(),
            email: this.state.email.trim(),
              
            password: this.state.password,
            Cpassword: this.state.Cpassword,



        }
        // let res = await api.registerUser(user)
        // if (res) {
        //     await this.props._login(this.state.email, this.state.password)
        //     window.location.replace("/")


        // }
        
    }
  

    render() {
        return (

            <View style={{ height: '100%',paddingTop:20,backgroundColor:"#04a4df" }}>
                 <Image source={require('../Assets/windaily.png')} style={{width:"80%",height:"20%", alignSelf:"center",marginVertical:20}} />


                
         
                    <View style={{ width: '100%',height:"90%",justifyContent:'space-evenly' }} >
                            <TouchableOpacity>

                        <Text style={{alignItems: 'center',fontFamily: "Poppins-Regular" ,alignSelf: 'center',justifyContent: 'center',alignSelf: 'center',marginTop: 10,fontSize:30,color:"#fff",textDecorationLine:"underline"}} >
                           SECURE PAYMENT PAGE
                        </Text>
                            </TouchableOpacity>
                    
                         

                         <TouchableOpacity onPress={() => this.addToReduc()} style={styles.text} >
                            <Text style={{ color: 'white',textDecorationLine:"underline",fontSize:30,fontFamily: "Poppins-Regular"  }}>Next</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                          
                        </View>

                    </View>
              
            </View>

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
        fontFamily: "Poppins-Regular" 
        
        
        
     
    },
    text1: {
        alignItems: 'center',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        height: 43,
        backgroundColor: '#fff',
        borderRadius: 3,
        width: "90%",
        fontFamily: "Poppins-Regular" 
        
        
     
    },
    inputfield: {
        width: '90%',
        height: 43,
        borderRadius: 3,
        backgroundColor: '#F5F8FA',
        borderColor: '#97aabd',
        borderWidth: 1,
        padding: 0, margin: 0,
        fontFamily: "Poppins-Regular" ,
        marginTop: 20,
        // color: "#97AABD",
        alignSelf: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
    

    },


});




export default Pay