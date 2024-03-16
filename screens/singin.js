import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { register_user_post_async } from '../store/services/authService';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"

const SignIn_User = () => {
    const [type, setType] = useState("");

    const { login_register_status, userAuth, user, register_error } = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [data, setData] = useState({})

    const submitHandle = () => {

        // dispatch(register_user_post_async(data))
        // console.log('checkingg',login_register_status);
        // console.log('data',user);
        // console.log('data',data);
        // console.log('userAuth',userAuth);

        // axios.post('http://localhost:5000/user/user-register', data).then((response) => { console.log(response); }).catch((error) => { console.log(error); })
        navigation.navigate('HomeScreen')
    }
    // }
    return (
        <>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ position:"absolute",top: 10, left: 15}}>
                    <Ionicons name="arrow-back-outline" size={20} color="#000" />
                </TouchableOpacity>
            <Text style={{ marginTop: 10, textAlign: "center", color: "black", fontWeight: "600", fontSize: 17 }}>Log in</Text>
            <ScrollView>

                <View>
                    <View style={{}} >

                        <Text style={{ color: "black", fontWeight: "700",textAlign:"center", fontSize: 20, marginTop: 30, marginHorizontal: 15 }}>Welcome back</Text>


                       
                        <View style={Styles.inpbox}>
                           
                            <View style={Styles.inplist}>
                                <TextInput style={{ paddingHorizontal: 10, paddingVertical: 7, flex:1 }} onChangeText={(e) => setData({ ...data, email: e })} color='#000' placeholderTextColor='#647f9b' placeholder='Email address' keyboardType='email-address' />
                                {/* <Ionicons name="mail-outline" size={18} color="#547292" /> */}
                            </View>
                            <View style={Styles.inplist}>
                                <TextInput style={{ paddingHorizontal: 10, paddingVertical: 7, flex:1 }} onChangeText={(e) => setData({ ...data, password: e })} secureTextEntry={true} color='#000' placeholderTextColor='#647f9b' placeholder='Password' />
                                {/* <Ionicons name="key-outline" size={18} color="#547292" /> */}
                            </View>
                        </View>

                      <Text style={{ color:"#637487",paddingHorizontal:15,marginTop:10,textDecorationLine:"underline"}}>Forgot password?</Text>

                        <TouchableOpacity onPress={submitHandle}  >
                            <View style={Styles.btnmain}>
                                <View style={Styles.secmain}>
                                    <Text style={Styles.btntext}>
                                        Log in
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity  onPress={() => navigation.navigate("signup")}>
                            <View style={[Styles.btnmain,{marginTop:5}]}>
                                <View style={[Styles.secmain, {backgroundColor:"#e8eef2"}]}>
                                    <Text style={[Styles.btntext,{color:"#121416"}]}>
                                       New user? Sign up
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>

            </ScrollView>
        </>
    )
}
export default SignIn_User
const Styles = StyleSheet.create({
    headbox: {
        alignItems: 'center',
        // fontSize:50
        marginVertical: 50

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
        paddingHorizontal: 15
    },
    inplist: {
        paddingHorizontal: 10,
        backgroundColor: "#e8eef2",
        borderRadius: 10,
        width: "100%",
        marginTop: 20,
        paddingVertical: 5,
        flexDirection:"row",
        alignItems:"center",
        paddingRight:15
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
        marginHorizontal:15,
        marginTop:20
    },
    secmain: {
        backgroundColor: '#1a80e6',
        borderColor: '#C0C0C0',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        width: "100%"
    },
    btntext: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'

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