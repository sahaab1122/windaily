import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
// import AddToFavorite from './AddToFavorite'
export default ({ winner, navigation, style }) => {
    // console.log(props.navigation)
    return (



        <TouchableOpacity style={{ width: "30%", marginVertical: 10, paddingHorizontal: 10 }}  >

           
            {/* <Image style={{ width: "100%", height: 92, resizeMode: 'contain', backgroundColor: '#F5F8FA'}} source={require('../Assets/dumy.png')} /> */}
            <EvilIcons name="user" size={92}  />
            {/* <Image style={{ width: "100%", height: 92, resizeMode: 'contain', backgroundColor: '#F5F8FA'}} source={require('../Assets/dumy.png')} /> */}
            <View style={styles.secview}>
                <View style={styles.thrdview}>
                    <Text style={{ fontSize: 18,alignSelf:"center",fontFamily: "Poppins-Regular"  }}>{winner.user.name} </Text>
                    <Text style={{ fontSize: 14,alignSelf:"center" ,fontFamily: "Poppins-Regular" }}>10$</Text>
                    <Text style={{ fontSize: 15,alignSelf:"center",fontFamily: "Poppins-Regular"  }}>Draw 669</Text>
                </View>
                {/* <AddToFavorite item={item} /> */}
            </View>

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({

    style1: {
        paddingLeft: 10
    },
    style2: {

    },

    secview: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:"center"
        

    },
    thrdview: {


    },
    tuchable: {
        padding: 0,
    },







});