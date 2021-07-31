
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
import Card from '../components/Card';




class Winner extends React.Component {













    render() {
        const { navigation } = this.props
        return (

            <Wrapper navigation={navigation}>
                <ScrollView>

                <View style={{ flexDirection: "row", justifyContent: "center" }}>

                    <Card />
                    <Card />
                    <Card />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>

                    <Card />
                    <Card />
                    <Card />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>

                    <Card />
                    <Card />
                    <Card />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>

                    <Card />
                    <Card />
                    <Card />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>

                    <Card />
                    <Card />
                    <Card />
                </View>
                </ScrollView>

            </Wrapper>

        )


    }
}

export default Winner






