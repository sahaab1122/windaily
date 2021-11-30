
import React from 'react';

import { ImageBackground, uri, StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { connect } from 'react-redux';
import api from '../api/api';
import path from '../api/path';



class Register extends React.Component {


    constructor() {
        super();
        this.state = {
            Fname: '',
            Lname: '',
            email: '',
            city: '',
            password: '',
            Cpassword: '',
            phone: '',
            loading: false

        }
    }
    Register = async () => {

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
        if (this.state.password !== this.state.Cpassword) {
            return alert('Password not match')
        }
        // else if (this.state.phone == '') {
        //     alert('Please write Phone no   ')
        // }
        else {
            let param = {
                "name": this.state.name,

                "phone": this.state.phone,
                "email": this.state.email,

                "password": this.state.password,
                "Cpassword": this.state.Cpassword,
            }
            await this.setState({ loading: true })
            let response = await api(path.register, "POST", param)
            this.setState({ loading: false })

            if (response.success === true) {


                this.props.navigation.navigate('Login')

            } else {
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
        }


    render() {
        return (

            <LinearGradient colors={['#04a4df', '#fff']} style={{ width: "100%", height: "100%", minHeight: Dimensions.get('window').height,paddingTop:getStatusBarHeight() }}>

                <Image source={require('../Assets/windaily.png')} style={{ width: "80%", height: "20%", alignSelf: "center", marginVertical: 20,resizeMode:"contain" }} />


                <ScrollView   contentContainerStyle={{ minHeight: Dimensions.get('window').height, justifyContent: 'space-evenly' }} showsVerticalScrollIndicator={false} >

                    <View style={{ width: '100%', height: "90%" }} >
                        {/* <TouchableWithoutFeedback onPress={keyboard.dismiss}/> */}
                        {/* <Inputfield text="First Name" /> */}
                        <TextInput style={styles.inputfield} placeholder="Name" placeholderTextColor="grey" color="#000"
                            onChangeText={(name) => { this.setState({ name }) }}
                        />

                        {/* <Inputfield  text="Phone or Mail" /> */}
                        <TextInput keyboardType={'email-address'} style={styles.inputfield} placeholder="Phone (optional)" color="#000" placeholderTextColor="grey"
                            onChangeText={(phone) => { this.setState({ phone }) }}
                        />
                        {/* <Inputfield text="Email" keyboardType="email-address" /> */}
                        <TextInput keyboardType={'email-address'} style={styles.inputfield} placeholder="Email" color="#000" placeholderTextColor="grey"
                            onChangeText={(email) => { this.setState({ email }) }}
                        />


                        <TextInput style={styles.inputfield} placeholder="Password" placeholderTextColor="grey" color="#000" secureTextEntry={true}
                            onChangeText={(password) => { this.setState({ password }) }}
                        />

                        <TextInput style={styles.inputfield} placeholder="Confirm Password" placeholderTextColor="grey" color="#000" secureTextEntry={true}
                            onChangeText={(Cpassword) => { this.setState({ Cpassword }) }}
                        />

                        <TouchableOpacity onPress={() => this.Register()} style={styles.text} >
                            {
                                this.state.loading === true ?
                                    <ActivityIndicator color="#fff" size="small" />
                                    :
                                    <Text style={{ color: 'white', fontSize: 20, fontFamily: "Poppins-Regular" }}>Sign up</Text>
                            }
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

                        </View>

                    </View>
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
        marginTop: 30,
        height: 43,
        color: "#04a4df",
        borderRadius: 3,
        backgroundColor: "#04a4df",
        width: "60%",
        textAlignVertical: "center",
        marginVertical: 20,
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

        marginTop: 20,
        // color: "#97AABD",
        alignSelf: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        fontFamily: "Poppins-Regular"


    },


});
const mapState = state => {
    return {

    }
}
const mapDispatch = dispatch => {
    return {

        setLoading: (bol) => dispatch(set_loading(bol)),
    }
}

export default connect(mapState, mapDispatch)(Register)