
import React from 'react';
// import { FontAwesome } from '@expo/vector-icons';
import { Linking, StyleSheet, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const INSTAGRAM_LINK = "https://www.instagram.com/makingwinnersdaily/"
const FB_LINK = "https://www.facebook.com/profile.php?id=100076763739214"
const WITHDRAW_LINK = "https://form.jotform.com/keemocreatesbiz/congratulations-prize-winner"



class Setting extends React.Component {


    openLink = (link) => {
        try {
            Linking.openURL(link)
        } catch (error) {
            console.log('error: ', error);

        }
    };
    openMail = () => {
        try {
            Linking.openURL('mailto:windailybiz@gmail.com?subject=Subject=Description')
        } catch (error) {
            console.log('error: ', error);

        }
    }



    render() {
        return (

            <LinearGradient colors={['#04a4df', '#fff']} style={{ backgroundColor: "#04a4df", width: "100%", height: "100%", justifyContent: "space-evenly" }}>


                <TouchableOpacity onPress={this.openMail} style={styles.text}>
                    <Text style={{ color: "white", fontFamily: "Poppins-Regular" }}>
                        Contact us
                    </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.text}>
                    <Text style={{ color: "white", fontFamily: "Poppins-Regular" }}>
                        Rate us
                    </Text>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Privacypolicy')} style={styles.text}>
                    <Text style={{ color: "white", fontFamily: "Poppins-Regular" }}>
                        Privacy Policy
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Termscondition')} style={styles.text}>
                    <Text style={{ color: "white", fontFamily: "Poppins-Regular" }}>
                        Terms Condition
                    </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.text}>
                    <Text style={{ color: "white", fontFamily: "Poppins-Regular" }}>
                        Invite Friends
                    </Text>
                </TouchableOpacity> */}
                <Text style={{ alignSelf: "center", justifyContent: "center", color: "#fff", fontFamily: "Poppins-Regular" }}>
                    {/* Your Referral Id: {this.state.user.name} */}
                </Text>
                <TouchableOpacity style={styles.text} onPress={() => this.openLink(INSTAGRAM_LINK)} >
                    <Text style={{ color: "white", fontFamily: "Poppins-Regular" }}>
                        Follow us on Instagram
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.text} onPress={() => this.openLink(FB_LINK)}>
                    <Text style={{ color: "white", fontFamily: "Poppins-Regular" }}>
                        Follow us on Facebook
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.text} onPress={() => this.openLink(WITHDRAW_LINK)}>
                    <Text style={{ color: "white", fontFamily: "Poppins-Regular" }}>
                        Withdraw your Balance
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


// const mapState = state => {
//     return {
//         // logged: state.authReducer.logged,
//         user: state.authReducer.user,

//     }
// }
// const mapDispatch = dispatch =>{
//     return{
//         // logout:() => dispatch(logout()),
//         // setLoading: (bol) => dispatch(_setLoading(bol)),


//     }
// }
export default Setting

