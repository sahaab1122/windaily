
import React from 'react';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
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
import { connect } from 'react-redux';
import { set_ticket } from '../store/actions/appAction';
import LinearGradient from 'react-native-linear-gradient';
import path from '../api/path';
import api from '../api/api';
import { _getTickets } from '../store/middlewares/appMiddleware';
// import { code } from 'statuses';




class AddTicket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',



        }
    }


    // login = async () => {

    //     if (this.state.email == '') {
    //         alert('Please write Email')
    //     }

    //     else if (this.state.password == '') {
    //         alert('Please write PASSWORD  ')
    //     }
    //     else {
    //         let param = {
    //             "email": this.state.email,
    //             "password": this.state.password
    //         } 
    //       await  this.setState({loading:true})
    //        await this.props._login(param)
    //        this.setState({loading:false})

    //     }




    // }


    sentCode = async () => {
        if (this.state.code == '') {
            alert('Please add ticket')
        }
        else {

            let param = {
                "ticket": this.state.code,
                "user": this.props.user._id
            }

            let response = await api(path.ticket, "POST", param)
            if (response.success === true) {
                let res = await this.props._getTickets({

                })
                // await this.props.setTicket(this.state.code)
                this.props.navigation.navigate('Ticket')
                // alert(response.message)
                // console.log(response.message)
                // alert(response.message)
            } else {
                alert(response.message)
            }
        }
    }













    render() {
        console.log(this.state.code, "code")
        return (
            // <LinearGradient colors={['#04a4df', '#fff']} style={{ width: "100%", height: "100%" }}>

            <LinearGradient colors={['#04a4df', '#fff']} style={{ width: "100%", height: "100%", justifyContent: "space-evenly" }}>
                <View style={{ alignSelf: "center" }}>
                    <SmoothPinCodeInput
                        codeLength={6}
                        cellStyle={{
                            borderBottomWidth: 2,
                            borderColor: 'white',
                        }}
                        cellStyleFocused={{
                            borderColor: 'white',
                        }}
                        textStyle={{
                            fontFamily: "Poppins-Regular",
                            color: 'white',
                            fontSize: 30

                        }}
                        value={this.state.code}
                        onTextChange={code => this.setState({ code: code })}
                    // onFulfill={code => this.addToReduc(code)}

                    />
                </View>


                <TouchableOpacity onPress={(e) => this.sentCode(e)} style={styles.text}>



                    <Text style={{ color: "white",fontFamily: "Poppins-Regular"  }}>
                        Add Ticket
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
        width: "70%",
        fontFamily: "Poppins-Regular" 
    },


});


const mapState = state => {
    return {
        tick: state.appReducer.tickets,
        // loading: state.globalReducer.loading,
        // token: state.authReducer.token,
        user: state.authReducer.user,
    }
}
const mapDispatch = dispatch => {
    return {
        // _getFav: (token, uid) => dispatch(_getFavourite(token, uid)),
        setTicket: ticks => dispatch(set_ticket(ticks)),
        _getTickets: () => dispatch(_getTickets())
        // setLoading: bol => dispatch(set_loading(bol))
    }
}

export default connect(mapState, mapDispatch)(AddTicket);

