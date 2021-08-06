
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
import { connect } from 'react-redux';
import { _getWinner } from '../store/middlewares/appMiddleware';




class Winner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                active:"",
 
        }
    }



      componentDidMount() {
         this.getwinner()
      }
      getwinner =   ( ) => {
        
        // this.props.setLoading(true)
         this.props._getWinner( )
    
    
      }








    render() {
        console.log(this.props.winner[0],'\n\n\n\n\n')
 
        const { navigation } = this.props
        return (

            <Wrapper navigation={navigation}>
                <ScrollView>

                <View style={{ flexDirection: 'row', flexWrap: "wrap", justifyContent: "center", }}>
                        {
                             this.props.winner.map((winner, index) =>
                                <Card navigation={this.props.navigation} winner={winner} key={index} />

                            )
                        }


                    </View>
               
                
                </ScrollView>

            </Wrapper>

        )


    }
}

const mapState = state => {
    return {
      winner: state.appReducer.winner,
  
    }
  }
  const mapDispatch = dispatch => {
    return {
      _getWinner: () => dispatch(_getWinner())
  
  
    }
  }
  export default connect(mapState, mapDispatch)(Winner)






