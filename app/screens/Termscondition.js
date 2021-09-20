
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
import LinearGradient from 'react-native-linear-gradient';




class Termscondition extends React.Component {













    render() {
        return (

            <LinearGradient colors={['#04a4df', '#fff']} style={{ backgroundColor: "#04a4df", width: "100%", height: "100%", justifyContent: "space-evenly" }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 20 }}>
                    {/* <Text style={{textAlign:"center",fontSize:35,fontWeight:"bold",}}>Privacy & Policy</Text> */}

                    <Text style={{ fontSize: 20, textAlign: "left", paddingVertical: 30 }}>
                        <Text style={{ fontWeight: "bold" }}>
                            Terms and Conditions


                        </Text>{"\n"}
                        Welcome to Win Daily!{"\n"}
                        These terms and conditions outline the rules and regulations for the use of Win Daily.
                        {"\n"}
                        By using this app, we assume you accept these terms and conditions. Do not continue
                        to use Win Daily if you do not agree to take all of the terms and conditions stated on
                        this page.{"\n"}
                        The following terminology applies to these Terms and Conditions, Privacy Statement
                        and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the
                        person log on this website and compliant to the Company’s terms and conditions. "The
                        Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties",
                        or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance,
                        and consideration of payment necessary to undertake the process of our assistance to
                        the Client in the most appropriate manner for the express purpose of meeting the
                        Client’s needs in respect of provision of the Company’s stated services, in accordance
                        with and subject to, prevailing law of Netherlands. Any use of the above terminology or
                        other words in the singular, plural, capitalization and/or he/she or they, are taken as
                        interchangeable and therefore as referring to same. {"\n"}
                        {"\n"}
                        <Text style={{ fontWeight: "bold" }}>
                            License

                        </Text>{"\n"}

                        Unless otherwise stated, Win Daily and/or its licensors own the intellectual property
                        rights for all material on Win Daily. All intellectual property rights are reserved. You may
                        access this from Win Daily for your own personal use subjected to restrictions set in
                        these terms and conditions.{"\n"}
                        You must not:{"\n"}
                        • Republish material from Win Daily{"\n"}
                        • Sell, rent or sub-license material from Win Daily{"\n"}
                        • Reproduce, duplicate, or copy material from Win Daily{"\n"}
                        • Redistribute content from Win Daily{"\n"}
                        This Agreement shall begin on the date hereof.{"\n"}
                        Parts of this app offer an opportunity for users to post and exchange opinions and
                        information in certain areas of the website. Win Daily does not filter, edit, publish, or
                        review Comments prior to their presence on the website. Comments do not reflect the
                        views and opinions of Win Daily, its agents and/or affiliates. Comments reflect the views
                        and opinions of the person who post their views and opinions. To the extent permitted
                        by applicable laws, Win Daily shall not be liable for the Comments or for any liability,
                        damages or expenses caused and/or suffered as a result of any use of and/or posting of
                        and/or appearance of the Comments on this website.{"\n"}
                        Win Daily reserves the right to monitor all Comments and to remove any Comments
                        which can be considered inappropriate, offensive or causes breach of these Terms and
                        Conditions.{"\n"}
                        You warrant and represent that:{"\n"}
                        • You are entitled to post the Comments on our App and have all necessary licenses and
                        consents to do so.{"\n"}
                        • The Comments do not invade any intellectual property right, including without limitation
                        copyright, patent, or trademark of any third party.{"\n"}
                        • The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise
                        unlawful material which is an invasion of privacy{"\n"}
                        • The Comments will not be used to solicit or promote business or custom or present
                        commercial activities or unlawful activity.{"\n"}
                        You hereby grant Win Daily a non-exclusive license to use, reproduce, edit, and
                        authorize others to use, reproduce and edit any of your Comments in any and all forms,
                        formats, or media{"\n"}


                        <Text style={{ fontWeight: "bold" }}>

                            Hyperlinking to our App

                        </Text>{"\n"}
                        The following organizations may link to our App without prior written approval:{"\n"}
                        • Government agencies;{"\n"}
                        • Search engines;{"\n"}
                        • News organizations;{"\n"}
                        • Online directory distributors may link to our App in the same manner as they hyperlink
                        to the Websites of other listed businesses; and{"\n"}
                        • System wide Accredited Businesses except soliciting non-profit organizations, charity
                        shopping malls, and charity fundraising groups which may not hyperlink to our Web site.{"\n"}
                        These organizations may link to our home page, to publications or to other App
                        information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply
                        sponsorship, endorsement or approval of the linking party and its products and/or
                        services; and (c) fits within the context of the linking party’s site.{"\n"}
                        We may consider and approve other link requests from the following types of
                        organizations:{"\n"}
                        • commonly known consumer and/or business information sources;{"\n"}
                        • dot.com community sites;{"\n"}
                        • associations or other groups representing charities;{"\n"}
                        • online directory distributors;{"\n"}
                        • internet portals;{"\n"}
                        • accounting, law, and consulting firms; and{"\n"}
                        • educational institutions and trade associations.{"\n"}
                        We will approve link requests from these organizations if we decide that: (a) the link
                        would not make us look unfavorably to ourselves or to our accredited businesses; (b)
                        the organization does not have any negative records with us; (c) the benefit to us from
                        the visibility of the hyperlink compensates the absence of Win Daily; and (d) the link is in
                        the context of general resource information.{"\n"}
                        These organizations may link to our App so long as the link: (a) is not in any way
                        deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the
                        linking party and its products or services; and (c) fits within the context of the linking
                        party’s site.{"\n"}
                        If you are one of the organizations listed in paragraph 2 above and are interested in
                        linking to our App, you must inform us by sending an e-mail to Win Daily. Please include
                        your name, your organization name, contact information as well as the URL of your site,
                        a list of any URLs from which you intend to link to our App, and a list of the URLs on our
                        site to which you would like to link. Wait 2-3 weeks for a response.{"\n"}
                        Approved organizations may hyperlink to our App as follows:{"\n"}
                        • By use of our corporate name; or{"\n"}
                        • By use of the uniform resource locator being linked to; or{"\n"}
                        • By use of any other description of our App being linked to that makes sense within the
                        context and format of content on the linking party’s site.{"\n"}
                        No use of Win Daily's logo or other artwork will be allowed for linking absent a
                        trademark license agreement.{"\n"}

                        <Text style={{ fontWeight: "bold" }}>
                            iFrames
                        </Text>{"\n"}
                        Without prior approval and written permission, you may not create frames around our
                        Webpages that alter in any way the visual presentation or appearance of our App.{"\n"}


                        <Text style={{ fontWeight: "bold" }}>

                            Content Liability
                        </Text>{"\n"}

                        We shall not be hold responsible for any content that appears on your App. You agree
                        to protect and defend us against all claims that is rising on our App. No link(s) should
                        appear on any Website that may be interpreted as libelous, obscene or criminal, or
                        which infringes, otherwise violates, or advocates the infringement or other violation of,
                        any third-party rights.{"\n"}

                        <Text style={{ fontWeight: "bold" }}>
                            Your Privacy
                        </Text>
                        {"\n"}
                        Please read Privacy Policy.{"\n"}

                        <Text style={{ fontWeight: "bold" }}>
                            Reservation of Rights
                            {"\n"}
                        </Text>
                        We reserve the right to request that you remove all links or any particular link to our
                        App. You approve to immediately remove all links to our App upon request. We also
                        reserve the right to amen these terms and conditions and it’s linking policy at any time.
                        By continuously linking to our App, you agree to be bound to and follow these linking
                        terms and conditions.{"\n"}

                        <Text style={{ fontWeight: "bold" }}>
                            Removal of links from our App
                        </Text>
                        {"\n"}
                        If you find any link on our App that is offensive for any reason, you are free to contact
                        and inform us any moment. We will consider requests to remove links, but we are not
                        obligated to or so or to respond to you directly.
                        {"\n"}
                        We do not ensure that the information on this website is correct, we do not warrant its
                        completeness or accuracy; nor do we promise to ensure that the website remains
                        available or that the material on the website is kept up to date.{"\n"}

                        <Text style={{ fontWeight: "bold" }}>
                            Disclaimer
                        </Text>
                        {"\n"}
                        To the maximum extent permitted by applicable law, we exclude all representations,
                        warranties and conditions relating to our App and the use of this website. Nothing in
                        this disclaimer will:  {"\n"}
                        • limit or exclude our or your liability for death or personal injury;  {"\n"}
                        • limit or exclude our or your liability for fraud or fraudulent misrepresentation;  {"\n"}
                        • limit any of our or your liabilities in any way that is not permitted under applicable law;  {"\n"}
                        or  {"\n"}
                        • exclude any of our or your liabilities that may not be excluded under applicable law.  {"\n"}
                        The limitations and prohibitions of liability set in this Section and elsewhere in this
                        disclaimer:  {"\n"}
                        (a) are subject to the preceding paragraph; and   {"\n"}
                        (b) govern all liabilities  {"\n"}
                        arising under the disclaimer, including liabilities arising in contract, in tort and for breach
                        of statutory duty.  {"\n"}
                        As long as the website and the information and services on the website are provided
                        free of charge, we will not be liable for any loss or damage of any nature.  {"\n"}
                    </Text>

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
        marginTop: 10,
        height: 43,
        backgroundColor: '#04a4df',
        borderRadius: 10,
        width: "70%",
        fontFamily: "Poppins-Regular"
    },


});



export default Termscondition

