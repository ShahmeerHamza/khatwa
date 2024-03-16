import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import { login_user_post_async } from '../store/services/authService';

const Login_User = () => {

    const { loginStatus, error } = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigation()

    const [data, setData] = useState({})
    const submitHandle = () => {
        // dispatch(login_user_post_async(data))
        navigate.navigate('HomeScreen')
    }
    return (
        <>
            <View style={{ flex: 1 }}>
                <View style={{ justifyContent: 'center', flex: 1 }} >
                    <View style={Styles.headbox}>
                        <Image style={{ height: hp(25) }} resizeMode="contain" source={require('../assets/Logo1.png')} />

                        <Text style={{ color: "black", fontWeight: "500", fontSize: 16, textAlign: "center", paddingHorizontal: 18 }}>Join thousands of other students who are learning and connecting with career paths.</Text>
                    </View>
                    <View style={Styles.inpbox}>
                        <TouchableOpacity style={{ backgroundColor: '#e8eef2', width: "80%", padding: 12, alignItems: "center", borderRadius: 10}}>
                            <Text style={{ color: "#0a1015", fontWeight: "600", fontSize: 15 }}>Sign in with Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigate.navigate("signin")} style={{ backgroundColor: '#1a80e6', width: "80%", padding: 12, alignItems: "center", borderRadius: 10 , marginTop: 10 }}>
                            <Text style={{ color: "white", fontWeight: "600", fontSize: 15 }}>Sign in with academic credentials</Text>
                        </TouchableOpacity>


                    </View>

                    <View style={{ marginVertical: 10, alignItems: "center", }}>
                        <Text onPress={()=>navigate.navigate('signup')} style={{ color: "#0a1015", fontWeight: "600", fontSize: 15, marginTop: 20,marginBottom:10 }}>Join now</Text>
                    </View>
{/* 
                    <Text style={{
                        fontSize: 13, color: "#597b99", textAlign: 'left', marginRight: 10, marginHorizontal: 20, textDecorationLine: "underline", marginTop: 15, textAlign: 'center', marginBottom: 50
                    }}>By continuing, you agree to our Terms of Service and Privacy Policy.</Text> */}
                </View>
            </View>


        </>
    )
}
export default Login_User
const Styles = StyleSheet.create({
    headbox: {
        alignItems: 'center',
        // fontSize:50
        marginTop: 50,
        marginBottom:25


    },
    image: {
        height: 200,
        width: 200
    },
    headname: {
        color: '#F55353',
        fontSize: 45,
        fontWeight: 'bold',
    },
    inpbox: {
        alignItems: 'center',
        textAlign: 'center',
        flex: 1
    },
    inplist: {
        paddingHorizontal: 10,
        borderColor: '#C0C0C0',
        width: wp(80),
        borderWidth: 1.5,
        marginVertical: 16,
        borderRadius: 7
    },
    forget: {
        alignItems: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    forgettext: {
        color: 'white',
        fontFamily: 'AndroidFonts',
    },
    btnmain: {
        alignItems: 'center',
        marginBottom: 10,
    },
    secmain: {
        backgroundColor: '#606161',
        borderColor: '#C0C0C0',
        height: 45,
        width: wp(80),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
    },
    btntext: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'

    },
    linkstyle: {
        color: 'blue',
        fontSize: 14,
        textDecorationLine: 'underline',
        justifyContent: 'flex-end'



    },
    checkboxContainer: {
        flexDirection: "row",
        justifyContent: 'flex-start',
        marginHorizontal: "10%",
        marginVertical: '5%'
    },
    checkbox: {
        alignItems: "center",
    },
    label: {
        color: 'white',
    },
    emoji: {
        color: 'white',
        fontSize: 25
    }
})