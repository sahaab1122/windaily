
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { ImageBackground, uri, StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView, ActivityIndicator } from 'react-native';
// import Middle from '../component/Middle';
// import Btn from '../component/Btn';
// import Lets from '../component/Lets';
// import Inputfield from '../components/Inputfield';
// import api from '../api/api';
// import path from '../api/path';
// import { _login } from '../store/middlewares/authMiddleware';
import { connect } from 'react-redux';
import { _login } from '../store/middlewares/authMiddleware';




class Login extends React.Component {
    constructor() {
        super();
        this.state = {
             
            email: 'sahaabsabir6@gmail.com',
            password: '123',
            loading: false
        }
    }

    



    login = async () => {

        if (this.state.email == '') {
            alert('Please write Email')
        }

        else if (this.state.password == '') {
            alert('Please write PASSWORD  ')
        }
        else {
            let param = {
                "email": this.state.email,
                "password": this.state.password
            } 
          await  this.setState({loading:true})
           await this.props._login(param)
           this.setState({loading:false})

        }




    }


//    pasaswordValidator() {
        // if (this.state.password == "") {
        //     this.setState({ passwordError: 'this field can not be empty' })
        // }
        // else {
        //      this.setState.props.navigation.navigate('Home')
        // }
    // }
     
 

 
    render() {
        return (

            <View style={{ height: '100%',backgroundColor:"#04a4df" }}>

                {/* <ImageBackground resizeMode='stretch' source={require('../../assets/LogBack.png')} style={{
                    width: "100%", height: '100%', minHeight: Dimensions.get('window').height, position: 'absolute', alignItems: 'center',

                }} /> */}
                <Image source={require('../Assets/windaily.png')} style={{width:"80%",height:"20%", alignSelf:"center",marginVertical:20}} />

                <ScrollView contentContainerStyle={{ minHeight: Dimensions.get('window').height, justifyContent: 'space-evenly' }} showsVerticalScrollIndicator={false} >
         
                    {/* <Middle /> */}

                    <View style={{ width: '100%',height:"80%" }} >

                        {/* <Inputfield text="Email" keyboardType="email-address" /> */}
                        <Text style={{color:"white",paddingLeft:35,fontSize:20,flexGrow:0}}>
                            Email
                        </Text>
                        <TextInput keyboardType={'email-address'} style={styles.inputfield} color="#000" placeholder="enter email"
                            onChangeText={(email) => { this.setState({ email }) }}
                        />

                        {/* <Inputfield text="Password" /> */}
                        <Text style={{color:"white",paddingHorizontal:35,fontSize:20,paddingTop:10}}>
                            Password
                        </Text>
                        <TextInput style={styles.inputfield} placeholder="enter password" color="#000" secureTextEntry={true}
                            onChangeText={(password) => { this.setState({ password }) }}
                        />
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Forgetpass')}>

                             
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.login()} style={styles.text} >
                            {
                                this.state.loading === true ? 
                                <ActivityIndicator color="#fff" size="small" />
                                :
                                <Text style={{ color: 'white',fontSize:30 ,textDecorationLine:"underline"}}>SIGN IN</Text> 
                            
                            }
                        </TouchableOpacity>
                        <TouchableOpacity style={{paddingHorizontal:20}}>
                            <Text style={{color:"white",}}>
                                Forget password?
                            </Text>
                        </TouchableOpacity>
                        <View style={{flexDirection:"row",paddingHorizontal:20,paddingVertical:20}}>
                            

                            <Text style={{color:"white",}}>
                                New to Win Daily? 
                            </Text>
                            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Register')} style={{paddingHorizontal:10}}>
                                <Text style={{color:"white",textDecorationLine:"underline"}}>
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
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
        marginTop: 20,
        height: 43,
        color:"white",
        paddingTop:10
       
        
    },
    inputfield: {
        width: '80%',
        height: 43,
        borderRadius: 3,
        backgroundColor: '#F5F8FA',
        borderColor: '#97aabd',
        borderWidth: 1,
        paddingLeft:20,
        fontSize:19,
         
        fontFamily: 'Poppins',
        marginTop: 10,
        color: "#97AABD",
        alignSelf: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 0,
        paddingVertical:0,







    },

});


const mapState = state => {
    return {
        logged: state.authReducer.logged,
        // loading: state.globalReducer.loading,
    }
}
const mapDispatch = dispatch => {
    return {
        _login: (param) => dispatch(_login(param)),
        setLoading: (bol) => dispatch(set_loading(bol)),
    }
}

export default connect(mapState, mapDispatch)(Login)




















 
