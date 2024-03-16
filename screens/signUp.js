import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { register_user_post_async } from '../store/services/authService';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"

const SignUp_User = () => {
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
            <Text style={{ marginTop: 10, textAlign: "center", color: "black", fontWeight: "600", fontSize: 17 }}>Sign up</Text>
            <ScrollView>

                <View>
                    <View style={{}} >

                        <Text style={{ color: "black", fontWeight: "600", fontSize: 22, marginTop: 30, marginHorizontal: 15 }}>Join thousands of other students who are learning and connecting with career paths.</Text>

                        <Text style={{ color: "black", fontWeight: "normal", fontSize: 16, marginTop: 20, marginHorizontal: 15 }}>Are you a student or professional?</Text>

                        <View style={{ paddingHorizontal: 15, marginTop: 20 }}>
                            {
                                [{ name: "student", des: "I am currently in high school, college, graduate school, trade school, or other student programs." }, { name: "professional", des: "I am not a student but I am interested in teaching about career paths and companies to students." }].map(({ name, des }) => (
                                    <View key={name} style={{ flexDirection: "row", borderWidth: 1, borderRadius: 10, width: "100%", borderColor: "#d9e2e9", minHeight: 110, marginBottom: 10 }}>
                                        <View style={{ alignItems: "center", justifyContent: "center", paddingHorizontal: 20 }}>
                                            <TouchableOpacity onPress={() => setType(name)} style={{ borderColor: type !== name ? "#d1dde7" : "#1980e3", width: 20, height: 20, borderRadius: 15, borderWidth: 2, padding: 3 }}>
                                                <View style={{ height: "100%", width: "100%", backgroundColor: type === name ? "#1980e3" : "transparent", borderRadius: 100, }} />
                                            </TouchableOpacity>

                                        </View>
                                        <View style={{ marginTop: 10, flex: 1, paddingRight: 30 }}>
                                            <Text style={{ color: "black", fontWeight: "500", textTransform: "capitalize" }}>{name}</Text>
                                            <Text style={{ color: "#6a8095", marginTop: 3 }}>{des}</Text>
                                        </View>
                                    </View>
                                ))
                            }
                        </View>

                        <View style={Styles.inpbox}>
                            <View style={Styles.inplist}>
                                <TextInput style={{ paddingHorizontal: 10, paddingVertical: 7, flex:1 }} onChangeText={(e) => setData({ ...data, age: e })} color='#000' placeholderTextColor='#647f9b' placeholder='Age' />
                                <MaterialCommunityIcons name="chart-line" size={18} color="#547292" />
                            </View>
                            <View style={Styles.inplist}>
                                <TextInput style={{ paddingHorizontal: 10, paddingVertical: 7, flex:1 }} onChangeText={(e) => setData({ ...data, fName: e })} color='#000' placeholderTextColor='#647f9b' placeholder='First name' />
                                <Ionicons name="person-circle-outline" size={18} color="#547292" />
                            </View>
                            <View style={Styles.inplist}>
                                <TextInput style={{ paddingHorizontal: 10, paddingVertical: 7, flex:1 }} onChangeText={(e) => setData({ ...data, lName: e })} color='#000' placeholderTextColor='#647f9b' placeholder='Last name' />
                                <Ionicons name="person-circle-outline" size={18} color="#547292" />
                            </View>
                            <View style={Styles.inplist}>
                                <TextInput style={{ paddingHorizontal: 10, paddingVertical: 7, flex:1 }} onChangeText={(e) => setData({ ...data, email: e })} color='#000' placeholderTextColor='#647f9b' placeholder='Email address' keyboardType='email-address' />
                                <Ionicons name="mail-outline" size={18} color="#547292" />
                            </View>
                            <View style={Styles.inplist}>
                                <TextInput style={{ paddingHorizontal: 10, paddingVertical: 7, flex:1 }} onChangeText={(e) => setData({ ...data, password: e })} secureTextEntry={true} color='#000' placeholderTextColor='#647f9b' placeholder='Password' />
                                <Ionicons name="key-outline" size={18} color="#547292" />
                            </View>
                        </View>

                        <Text style={{ color: "black", fontWeight: "700", fontSize: 19.5, marginTop: 30, marginHorizontal: 15 }}>Your interests and goals</Text>

                        <View style={Styles.inpbox}>
                            <View style={Styles.inplist}>
                                <TextInput style={{ paddingHorizontal: 10, paddingVertical: 7, flex:1 }} onChangeText={(e) => setData({ ...data, foi: e })} color='#000' placeholderTextColor='#647f9b' placeholder='Field of interest' />
                                <Ionicons name="briefcase-outline" size={18} color="#547292" />
                            </View>
                            <View style={Styles.inplist}>
                                <TextInput style={{ paddingHorizontal: 10, paddingVertical: 7, flex:1 }} onChangeText={(e) => setData({ ...data, dcp: e })} color='#000' placeholderTextColor='#647f9b' placeholder='Desired career path' />
                                <Ionicons name="briefcase-outline" size={18} color="#547292" />
                            </View>

                        </View>

                        <TouchableOpacity onPress={submitHandle}  >
                            <View style={Styles.btnmain}>
                                <View style={Styles.secmain}>
                                    <Text style={Styles.btntext}>
                                        Join now
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
export default SignUp_User
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