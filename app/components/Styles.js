import { StyleSheet, Platform } from "react-native";
// import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from "react-native-responsive-screen";
// import { getStatusBarHeight } from "react-native-status-bar-height";
// import { color } from "./Colors";
// import * as Font from 'expo-font'


export const stylee = StyleSheet.create({


    //shadows

    // auth screens
    shadow_0_0_20: {
        shadowColor: 'rgba(0,0,0,1)', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.20, shadowRadius: 5,
        elevation: Platform.OS === 'ios' ? 0 : 5
    },

    // add new card
    shadow_0_3_12: {
        shadowColor: 'rgba(139,139,139, 0.12)', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.12, shadowRadius: 5,
        elevation: Platform.OS === 'ios' ? 0 : 5
    },

    // profile
    shadow_0_3_6: {
        shadowColor: color.c70, shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.6, shadowRadius: 5,
        elevation: Platform.OS === 'ios' ? 0 : 5
    },
    // profile
    shadow_0_3_10: {
        shadowColor: color.c70, shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.1, shadowRadius: 5,
        elevation: Platform.OS === 'ios' ? 0 : 5
    },

    // profile fav  +headerCircle tirle+ 
    shadow_0_3_20: {
        shadowColor: color.c8b, shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2, shadowRadius: 5,
        elevation: Platform.OS === 'ios' ? 0 : 5
    },



    // header
    topHeader: {
        width: '100%', height: 100, position: 'absolute', top: 0
    },






    // login---------------------------------------------
    login: {
        width: '100%', height: hp('100%'), justifyContent: 'flex-end', alignItems: 'center'
    },
    loginContent: {
        height: hp('88%'), width: wp('90%'), justifyContent: 'space-evenly'
    },
    logininputContainer: {
        flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, width: '100%', backgroundColor: '#fff',
        borderRadius: 40, height: 50, marginVertical: 10
    },
    loginInputIcon: {
        // width: '5%', height: '50%', marginRight: 10,
    },
    loginInput: {
        // flex: 1, height: '100%', textAlignVertical: 'center', color: color.c44, fontFamily: 'poppinR', fontSize: wp('3.5%')
    },

    loginBtnRememberContainer: {
        flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, paddingHorizontal: 10
    },
    loginRemmeberContainer: {
        flexDirection: 'row', alignItems: 'center'
    },
    loginCheckBox: {
        width: 20, height: 20, marginLeft: 5, borderRadius: 5, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'
    },
    loginBtnTouch: {
        height: 60, alignSelf: 'flex-end', width: 150, borderRadius: 100, overflow: 'hidden', alignItems: "center", justifyContent: 'center'
    },
    loginGradient: {
        width: '100%', height: '100%', alignItems: 'center', justifyContent: "center"
    },
    loginSocialContainer: {
        alignItems: "center", marginVertical: 10
    },
    loginSocialBtnContainer: {
        width: '100%', justifyContent: 'flex-end', alignItems: 'flex-end', flexDirection: 'row', marginVertical: 10
    },
    loginSocialBtnTouch: {
        alignItems: 'center', justifyContent: 'center',
        width: 55, height: 55, borderRadius: 30, borderWidth: 1, margin: 3
    },
    loginsSocialImg: {
        width: 20, height: 20
    },
    loginSaveProfileContainer: {
        width: '60%', backgroundColor: color.c5f, alignSelf: 'center', borderRadius: 30, paddingHorizontal: 15, height: 60,
        alignItems: 'center', flexDirection: 'row'
    },
    loginProfileImg: {
        width: '20%', height: '50%',
    },
    loginProfileInfoContainer: {
        flex: 1, justifyContent: 'center', alignItems: 'flex-end',
    },
    loginBottomBtnContainer: {
        height: 60, justifyContent: 'flex-end', alignItems: 'center'
    },




    //register--------------------------
    registerPhoneCodeTouch: {
        width: '25%', height: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 40, backgroundColor: '#fff'
    },
    registerPhoneInput: {
        width: '70%', height: '100%', justifyContent: 'center', fontSize: wp('3.5%'), fontFamily: 'Poppins-Regular', borderRadius: 40, backgroundColor: '#fff', paddingHorizontal: 20
    },
    registerBtnContainer: {
        height: hp('8%'), justifyContent: 'flex-end'
    },




    // -------add address------------
    addressContent: {
        width: '80%', height: '95%', justifyContent: 'space-evenly'
    },
    address1stView: {
        height: '70%', justifyContent: 'space-evenly'
    },
    addressPlaceContainer: {
        width: '90%', backgroundColor: '#fff', alignSelf: 'flex-end', height: 80, borderRadius: 20,
        alignItems: 'center', justifyContent: 'center'
    },
    addressImage: {
        height: '100%', width: '22%', position: 'absolute', left: -25
    },




    // location pcik
    locationPick: {
        alignItems: 'center', position: 'absolute'
    },
    locationPickMapContainer: {
        ...StyleSheet.absoluteFill, justifyContent: 'center', alignItems: 'center', zIndex: -1
    },
    locationPickSaveBtnContainer: {
        position: 'absolute', bottom: 50, alignSelf: 'center'
    },
    locationPickInputContainer: {
        width: '90%', height: 50, alignSelf: 'center'
    },
    locationPickInput: {
        borderRadius: 30, width: '100%', fontFamily: 'Poppins-Regular', color: color.c6a, fontSize: wp('3%'), color: "black",
    },
    locationPickMap: {
        width: '100%', height: '100%'
    },
    locationPickInputDropdown: {
        color: "white", backgroundColor: "white", paddingHorizontal: 10,
    },

    forgotPassword: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    forgotPasswordContent: {
        width: '90%', flex: 1, justifyContent: 'flex-end', alignSelf: 'center',
    },





















    // home
    home: {
        flex: 1, alignItems: 'center',
    },
    homeContent: {
        flex: 1, width: '100%',
    },
    homeOfferContainer: {
        width: '100%', alignItems: 'center', alignSelf: 'center'
    },
    homeMapContainer: {
        width: '90%', height: 220,
    },
    homeMap: {
        width: '100%', height: '80%',
    },
    homeFlatlist: {
        position: 'absolute', width: wp('95%'), height: 80, bottom: 0
    },

    item: {
        backgroundColor: '#fff', width: '90%', marginVertical: 10, height: 100, justifyContent: 'space-between', alignItems: 'center',
        flexDirection: 'row', borderWidth: 1, borderColor: color.cf79
    },
    homeOfferRowImg: {
        width: '30%', height: '50%'
    },

    homeOfferRowLastContent: {
        width: 80, justifyContent: 'space-evenly', height: '100%'
    },

    animatedHeaderContainer: {
        position: 'absolute', top: 0, left: 0, right: 0,
        justifyContent: 'center', alignItems: 'center'
    },

    // hotel near you
    hotelNearYouFlatlist: {
        width: wp('95%'), marginLeft: wp('5%'), height: 80, bottom: 0, flexGrow: 0
    },




    // search 2nd tab
    searchResult: {
        flex: 1, alignItems: 'center', backgroundColor: '#fff'
    },
    searchResultContent: {
        flex: 1, alignItems: 'flex-end', width: '90%', alignSelf: 'flex-end'
    },

    animatedView: {
        width: '90%', flexDirection: 'row', justifyContent: 'space-evenly'
    },
    animatedSearchContainer: {
        backgroundColor: '#fff', borderRadius: 30, height: 50, alignItems: 'center', justifyContent: 'center',
        flexDirection: 'row',
    },
    animtedInput: {
        height: 50, width: '100%', marginLeft: 10,
    },
    filterContainer: {
        alignItems: 'center', justifyContent: 'center', borderRadius: 25, height: 50, flexDirection: 'row',
    },
    searchResultSectionHeader: {
        width: '90%', flexDirection: 'row', alignItems: 'center', marginVertical: 5
    },
    sectionHeaderImg: {
        width: 50, height: '100%'
    },
    searchResultSectionItem: {
        width: 130, height: 120, backgroundColor: 'red', marginRight: 5,
    },

    // select store
    selectStore: {
        flex: 1, alignItems: "center",
    },
    selectStoreItem: {
        width: '100%', height: 80, flexDirection: 'row', marginVertical: 10,
        borderBottomWidth: 1, borderColor: color.c4c, alignItems: 'center',justifyContent:'space-between'
    },
    selectStoreIcon: {
        height: '80%', width: '100%',
    },
    selectStoreRowInfoContainer: {
        flex: 1, marginHorizontal:20
    },

    selectStoreFlatlist: {
        width: '85%', marginTop: 10,
    },

    // explore store
    exploreStore: {
        flex: 1, alignItems: 'center', justifyContent: 'space-between', zIndex: 2
    },

    exploreStoreTop: {
        height: 200, width: '100%', alignItems: 'center',
    },
    exploreStoreAd: {
        width: '100%', flex: 1
    },
    exploreStoreTopImgContainer: {
        width: 60, height: 60, position: 'absolute', right: 0, bottom: 0, backgroundColor: '#fff',
        borderRadius: 30, alignItems: 'center', justifyContent: 'center'
    },
    exploreStoreTopImg: {
        width: '60%', height: '60%',
    },

    exploreStoreBottom: {
        flex: 1, flexDirection: 'row', backgroundColor: '#fff', alignSelf: 'flex-end'
    },
    // left
    exploreStoreLeftContainer: {
        width: '35%', backgroundColor: color.cf6, alignItems: 'center'
    },
    exploreStoreLeftTitileContainer: {
        paddingVertical: 10, width: '100%', alignItems: 'center', marginBottom: 5,
    },
    exploreStoreLeftText: {
        fontFamily: 'Poppins-SemiBold', fontSize: wp('3%'),
    },

    // explore product
    exploreProduct: {
        flex: 1, backgroundColor: '#fff', width: '100%'
    },
    exploreProductScrollView: {
        alignItems: 'center',
    },
    exploreProductContent: {
        flex: 1, width: '90%',
    },
    carousalImg: {
        width: '100%', height: '100%',
    },
    exploreProductNameContainer: {
        width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10
    },
    exploreProductStokeDetails: {
        width: '70%', alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center',
    },
    exploreProductMap: {
        width: '100%', height: 150
    },

    exploreProductModal: {
        flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.93)'
    },
    exploreProductModalCard: {
        width: '80%', height: '50%', borderRadius: 30, backgroundColor: color.c61, padding: 30,
        alignItems: 'center',
    },









    //cart  3rd tab
    cart: {
        flex: 1, alignItems: 'center', width: '90%', alignSelf: 'center', justifyContent: 'space-between'
    },
    cartRow: {
        width: '90%', height: 100, flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', marginVertical: 10
    },
    cartRowCloseTouch: {
        position: 'absolute', top: -10, right: -5, width: 25, height: 25, backgroundColor: color.ccc, borderRadius: 12.5,
        alignItems: 'center', justifyContent: 'center',
    },
    cartRowImg: {
        height: '80%', width: 100
    },
    cartRowInfo: {
        flex: 1, height: '60%'
    },
    cartRowActionContainer: {
        width: '25%',
    },
    cartActionBtnTouch: {
        // height: 20, width: 20, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: color.ccc
    },
    cartQuantityContainer: {
        // flexDirection: 'row', alignItems: 'center', marginVertical: 5
    },



    cartFooter: {
        width: '100%', marginVertical: 10
    },
    cartCalculationContainer: {
        width: 120,
        alignSelf: 'flex-end',
        marginBottom: 10
    },

    cartDetailCaluclationRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cartPromoInput: {
        width: '100%', height: 40, borderRadius: 10, backgroundColor: '#fff',
        marginVertical: 5, paddingLeft: 10, fontFamily: 'Poppins-Regular', fontSize: wp('3%'),
    },
    cartFooterPickOption: {
        height: 30, flexDirection: 'row', width: '100%', marginBottom: 5, justifyContent: 'center'
    },
    cartFooterPickOptionTouch: {
        height: '100%', flexDirection: 'row', alignItems: 'center', marginRight: 20
    },
    cartFooterProceed: {
        flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginVertical: 10
    },
    // payment method
    paymentMethod: {
        alignItems: 'center', alignSelf: 'center', justifyContent: 'space-between', width: '100%'
    },
    paymentMethodContent: {
        alignItems: 'center', width: '100%'
    },
    paymentMethodInfoContainer: {
        flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5,
    },

    // payment done
    paymentDoneCode: {
        flex: 1, alignItems: 'center', alignSelf: 'center', width: '90%', justifyContent: 'center'
    },
    paymentDoneCodeImg: {
        width: 120, height: 120
    },
    paymentDoneInfoContainer: {
        marginVertical: 5,
    },





    //profile
    profile: {
        alignItems: 'center',
    },
    profileLogo: {
        height: 120, marginTop: 30, width: '50%'
    },
    profileCard: {
        width: '90%', backgroundColor: '#fff', alignItems: 'center', marginVertical: 10
    },
    profileCardRow: {
        width: '85%', height: 70, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',
        borderColor: color.cD9, borderBottomWidth: 1
    },
    profileImageContainer: {
        flexDirection: 'row', alignItems: 'center'
    },
    profileRowImg: {
        width: 40, height: 40, borderRadius: 20, overflow: 'hidden'
    },
    img: {
        width: '100%', height: '100%'
    },
    profileMiniIcon: {
        width: 20, height: 20
    },


    // favoruite
    fav: {
        flex: 1, alignItems: 'center', width: '100%'
    },
    favSearchContainer: {
        // backgroundColor: '#fff', paddingHorizontal: 10, borderRadius: 30, width: '90%',
        // alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between',
    },
    favInput: {
        // height: 55, fontFamily: 'poppinR', color: color.cB7, fontSize: wp('3%'), width: '80%'
    },
    favScrollview: {
        marginTop: 10, width: wp('90%'), paddingBottom: 30,
    },
    favItemCard: {
        flex: 1,
        height: 180, backgroundColor: '#fff', margin: 10,
        alignItems: 'center', justifyContent: 'center',
    },
    favCardImg: {
        height: '40%', width: '50%'
    },
    heartIconContainer: {
        position: 'absolute', padding: 10, zIndex: 1, top: 0, right: 0,
        alignItems: 'center', justifyContent: 'center'
    },

    // profile addresses
    pAddress: {
        flex: 1, alignItems: 'center'
    },
    pAddressContent: {
        width: wp('90%'), alignSelf: "center", marginTop: 40, alignItems: 'center', paddingBottom: 20
    },
    pAddressContainer: {
        height: 90, backgroundColor: '#fff', width: '100%', paddingHorizontal: 30, borderRadius: 5,
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10, borderColor: color.fe8
    },
    setDefaultBtnTouch: {
        position: 'absolute', top: -10, right: -5, alignItems: 'center', justifyContent: 'center',
        width: 90, height: 25, borderRadius: 40, borderColor: color.c70, backgroundColor: '#fff'
    },

    // profile payment option
    paymentIcon: {
        width: 70, height: 50,
    },
    paymentCreditInfoContainer: {
        flex: 1, paddingLeft: 10,
    },

    // profile add new card
    newCardContent: {
        flex: 1, alignItems: 'center', justifyContent: 'space-evenly'
    },
    newCardFieldsContainer: {
        width: '90%',
    },

    // orders
    orders: {
        flex: 1, alignItems: 'center', backgroundColor: '#fff'
    },

    // order detail
    orderDetail: {
        flex: 1, alignItems: 'center', backgroundColor: '#fff'
    },
    orderDetailContent: {
        width: '100%', marginTop: 20,paddingHorizontal:20
    },
    orderDetailRowContainer: {
        paddingTop: 10, paddingBottom: 15, backgroundColor: '#fff', borderBottomWidth: 1, borderColor: color.cfe8,
        marginBottom: 10, paddingHorizontal: 10
    },
    orderDetailStoreImg: {
        width: '30%', height: 50
    },
    orderDetailCaluclationRow: {
        width: '50%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'
    },

    // change pass
    changePass: {
        flex: 1, width: '90%', alignSelf: 'center', justifyContent: 'space-evenly'
    },








    // promotion
    promotion: {
        flex: 1, alignItems: 'center', alignSelf: 'center', width: '90%'
    },
    promotionAddCodeTouch: {
        height: 55, width: '100%', alignItems: 'center', justifyContent: 'center', marginVertical: 20,
        borderColor: color.c1b, borderWidth: 1, borderRadius: 30
    },
    listImg: {
        width: '80%', height: '50%'
    },
    promotionCardInfoContainer: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        width: '80%'
    },

    // promotion code
    promotionCode: {
        flex: 1, alignItems: 'center', alignSelf: 'center', width: '90%', justifyContent: 'center'
    },
    promotionCodeImg: {
        width: 150, height: 150
    },














    // filter page
    filter: {
        alignItems: 'center', paddingBottom: 30
    },
    filterTopBtnContainer: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '60%', marginVertical: 20,

    },
    filterTopBtnTouch: {
        width: 80, height: 80, backgroundColor: '#fff', borderRadius: 50,
        alignItems: 'center', justifyContent: 'center'
    },
    filterPickerContainer: {
        width: '90%', height: 50, marginVertical: 10, backgroundColor: '#fff', paddingHorizontal: 15, justifyContent: 'center',
        borderRadius: 30
    },








})
