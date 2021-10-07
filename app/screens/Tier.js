
import React from 'react';

import { ImageBackground, uri, StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import path from '../api/path';
import api from '../api/api';
import { set_tier } from '../store/actions/appAction';
import * as RNIap from 'react-native-iap';
import { _updateuser } from '../store/middlewares/authMiddleware';


// import api from '../api/api';
// import path from '../api/path';
const items = Platform.select({
    ios: [
        'Bronze',
        'Silver',
        'Gold'

    ],
    android: [
        '1599'
    ]
});
class Tier extends React.Component {


    constructor() {
        super();
        this.state = {
            // free:"",
            // bronze:"",
            // silver:"",
            // gold:"",
            loading: false,
            selectedValue: false,
            tiers: []
        }
    }
    // valueSelect = async () => {

    //     if (this.state.selectedValue == '') {

    //     }

    buyEvent = async (item) => {
        try {
            // const result = await RNIap.clearTransactionIOS("1000000821206521")
            const result = await RNIap.requestPurchase(item.productId)
            console.log(result)
            if (result?.transactionId) {
                if (Platform.OS === 'ios') {
                } else if (Platform.OS === 'android') {
                    // If consumable (can be purchased again)
                    // await RNIap.consumePurchaseAndroid(result.purchaseToken);
                    // If not consumable
                    // await RNIap.acknowledgePurchaseAndroid(result.purchaseToken);
                }
                await RNIap.finishTransaction(result, true);
                this.props.hideModal()

                if (Platform.OS === 'ios') {
                    console.log(result, 'iap purchased')
                    alert('Done')
                }
                else {
                    console.log(result, "asdasd")
                    alert('Done')
                }
            }
            else {
                alert('Payment Failed')
            }
            // alert(JSON.stringify(result))
        }
        catch (err) {
            console.log(err)
        }
    }
    initRNIAP = async () => {
        try {
            await RNIap.initConnection()
                .then(() => {
                    RNIap.getSubscriptions(items).then((products) => {
                        this.setState({ tiers: products })

                    }).catch((error) => {
                        console.log(error.message);
                        console.log(error, "here is the error")
                        alert(error.message)
                    })
                })
        } catch (err) {
            console.debug('initConnection');
            console.error("INIT IAP ERROR IS", err, err.code, err.message);
            // Alert.alert(ENV.language['fail to get in-app-purchase information']);
        }
    }





    selectedValue = async () => {
        let type = {
            "user": this.props.user._id, 
            subscription:Platform.OS==="android"?"Free": this.state.selectedValue, 
        }
        
        let res = await this.props._updateuser(type, this.props.user._id)
        
        if(res ){
           this.props.hideModal() 
        }


    }
    componentDidMount() {
        this.initRNIAP()
    }
    render() {
        console.log(this.props.tier, "tier")
        const { navigation } = this.props
        return (

            <View style={{ height: '100%', paddingTop: 20, backgroundColor: "#04a4df" }}>
                <View style={{ width: "90%", height: 200, justifyContent: "center", alignSelf: "center" }}>


                    <Image source={require('../Assets/windailys.png')} style={{ width: "100%", height: 200, alignSelf: "center" }} />
                </View>

                <ScrollView contentContainerStyle={{ minHeight: Dimensions.get('window').height, justifyContent: 'space-evenly' }} showsVerticalScrollIndicator={false} >

                    <View style={{ width: '100%', height: "90%" }} >

                        <Text style={{ alignItems: 'center', fontFamily: "Poppins-Regular", alignSelf: 'flex-end', justifyContent: 'center', alignSelf: 'center', marginTop: 10, height: 43, fontSize: 30, color: "#fff", textDecorationLine: "underline" }} >
                            TIER SELECTION
                        </Text>
                        <TouchableOpacity style={styles.text1} onPress={() => this.selectedValue()} >
                            <Text style={{ color: '#000', fontSize: 20, fontFamily: "Poppins-Regular" }}>FREE</Text>
                        </TouchableOpacity>
                        {items?.map((item, index) =>
                        (<TouchableOpacity onPress={() => this.setState({ selectedValue: item.title }, () => this.buyEvent(item))} style={styles.text1} >
                            <Text style={{ color: '#000', fontSize: 20, fontFamily: "Poppins-Regular" }}>{item.title}</Text>
                        </TouchableOpacity>)
                        )}
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
        fontFamily: "Poppins-Regular",
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

        user: state.authReducer.user,
        tier: state.appReducer.tier,
    }
}
const mapDispatch = dispatch => {
    return {

        //   _getPrizes: () => dispatch(_getPrizes()),
        set_tier: tiers => dispatch({ type: "set_tier", payload: tiers }),
        // setLoading: (bol) => dispatch(set_loading(bol)),
        _updateuser: (param, _id) => dispatch(_updateuser(param, _id)),

    }
}
export default connect(mapState, mapDispatch)(Tier)
