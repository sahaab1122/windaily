
import React from 'react';

import { ImageBackground, uri, StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';

 
// import api from '../api/api';
// import path from '../api/path';

class Register extends React.Component {

  
    constructor() {
        super();
        this.state = {
            Fname: '',
            Lname: '',
            email: '',
            city:'',
            password: '',
            Cpassword: '',
            phone: '',

        }
    }
    addToReduc = async () => {

        if (this.state.name == '') {
            alert('Please write Name')
        }

       
        else if (this.state.email == '') {
            alert('Please write Email  ')
        }
       
        else if (this.state.password == '') {
            alert('Please write PASSWORD  ')
        }
        else if (this.state.Cpassword == '') {
            alert('Please write Confirm PASSWORD  ')
        }
        else if (this.state.phone == '') {
            alert('Please write Phone no   ')
        }
        else {
            let param = {
                "name": this.state.name,
              
                "phone": this.state.phone,
                "email": this.state.email,
             
                "password": this.state.password,
            }
            let response = await api(path.register, "POST", param)
            // alert(response.message)
            console.log(response.message)
            alert(response.message)
        }




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

            <View style={{ height: '100%',paddingTop:20,backgroundColor:"blue" }}>
                 <Image source={require('../Assets/windaily.png')} style={{width:"80%",height:"20%", alignSelf:"center",marginVertical:20}} />


                <ScrollView contentContainerStyle={{ minHeight: Dimensions.get('window').height, justifyContent: 'space-evenly' }} showsVerticalScrollIndicator={false} >
         
                    <View style={{ width: '100%',height:"90%" }} >
                        {/* <TouchableWithoutFeedback onPress={keyboard.dismiss}/> */}
                        {/* <Inputfield text="First Name" /> */}
                        <TextInput style={styles.inputfield} placeholder="Name" placeholderTextColor="grey"
                            onChangeText={(Fname) => { this.setState({ name }) }}
                        />
                       
                        {/* <Inputfield  text="Phone or Mail" /> */}
                        <TextInput keyboardType={'email-address'} style={styles.inputfield} placeholder="Phone no" placeholderTextColor="grey"
                            onChangeText={(phone) => { this.setState({ phone }) }}
                        />
                        {/* <Inputfield text="Email" keyboardType="email-address" /> */}
                        <TextInput keyboardType={'email-address'} style={styles.inputfield} placeholder="Email" placeholderTextColor="grey"
                            onChangeText={(email) => { this.setState({ email }) }}
                        />

                        
                        <TextInput style={styles.inputfield} placeholder="Password" placeholderTextColor="grey" secureTextEntry={true}
                            onChangeText={(password) => { this.setState({ password }) }}
                        />
                        
                        <TextInput style={styles.inputfield} placeholder="Confirm Password" placeholderTextColor="grey" secureTextEntry={true}
                            onChangeText={(Cpassword) => { this.setState({ Cpassword }) }}
                        />

                         <TouchableOpacity onPress={() => this.addToReduc()} style={styles.text} >
                            <Text style={{ color: 'white',textDecorationLine:"underline",fontSize:30 }}>Sign up</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                          
                        </View>

                    </View>
                </ScrollView>
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
        
        
        
     
    },
    inputfield: {
        width: '90%',
        height: 43,
        borderRadius: 3,
        backgroundColor: '#F5F8FA',
        borderColor: '#97aabd',
        borderWidth: 1,
        padding: 0, margin: 0,
        fontFamily: 'Poppins',
        marginTop: 20,
        // color: "#97AABD",
        alignSelf: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
    

    },


});




export default Register