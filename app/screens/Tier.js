
import React from 'react';

import { ImageBackground, uri, StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { set_tier } from '../store/actions/appAction';


// import api from '../api/api';
// import path from '../api/path';

class Tier extends React.Component {


    constructor() {
        super();
        this.state = {
            selectedValue:false,
           


        }
    }
    // valueSelect = async () => {

    //     if (this.state.selectedValue == '') {
           
    //     }


       
     

    // }
    selectedValue = () => {
         this.props.set_tier(this.state.selectedValue)
    }

    render() {
        return (

            <View style={{ height: '100%', paddingTop: 20, backgroundColor: "#04a4df" }}>
                <View style={{ width: "90%", height: 200, justifyContent: "center", alignSelf: "center" }}>


                    <Image source={require('../Assets/windailys.png')} style={{ width: "100%", height: 200, alignSelf: "center" }} />
                </View>

                <ScrollView contentContainerStyle={{ minHeight: Dimensions.get('window').height, justifyContent: 'space-evenly' }} showsVerticalScrollIndicator={false} >

                    <View style={{ width: '100%', height: "90%" }} >

                        <Text style={{ alignItems: 'center', alignSelf: 'flex-end', justifyContent: 'center', alignSelf: 'center', marginTop: 10, height: 43, fontSize: 30, color: "#fff", textDecorationLine: "underline" }} >
                            TIER SELECTION
                        </Text>
                        <TouchableOpacity  style={styles.text1} onPress={() => { this.setState({ selectedValue :"free"}) }} >  
                            <Text style={{ color: '#000', fontSize: 20 }}>FREE</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { this.setState({ selectedValue :"bronze"}) }} style={styles.text1} >
                            <Text style={{ color: '#000', fontSize: 20 }}>BRONZE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.setState({ selectedValue :"silver"}) }} style={styles.text1} >
                            <Text style={{ color: '#000', fontSize: 20 }}>SILVER</Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => { this.setState({ selectedValue :"gold"}) }} style={styles.text1} >
                            <Text style={{ color: '#000', fontSize: 20 }}>GOLD</Text>
                        </TouchableOpacity>



                        <TouchableOpacity  onPress={() => this.selectedValue()} style={styles.text} >
                            <Text style={{ color: 'white', textDecorationLine: "underline", fontSize: 30 }}>Next</Text>
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
    text1: {
        alignItems: 'center',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        height: 43,
        backgroundColor: '#fff',
        borderRadius: 3,
        width: "90%"



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

const mapState = state => {
    return {
    //   logged: state.authReducer.logged,
   
    //   prizes: state.appReducer.prizes,
    tier: state.appReducer.tier,
    }
  }
  const mapDispatch = dispatch => {
    return {
 
    //   _getPrizes: () => dispatch(_getPrizes()),
    set_tier: tiers => dispatch({type:"set_tier",payload:tiers})
  
  
    }
  }
export default  connect(mapState,mapDispatch) ( Tier)
