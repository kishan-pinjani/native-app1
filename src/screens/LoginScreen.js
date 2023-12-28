import { Dimensions, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Entypo';
import React, { useState } from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import api from '../utills/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { encode } from 'base-64';
// import { useFocusEffect } from '@react-navigation/native';
import { Image } from "react-native-elements";

const LoginScreen = ({ navigation }) => {

    {/* 

         // code for hiding header on login screen

        useFocusEffect(() => {
            const unsubscribe = navigation.addListener('focus', () => {
                navigation.setOptions({ headerShown: false });
            });

            return () => {
                unsubscribe();
            };
        }, [navigation])

    */}

    const [errorMsg, setErrorMsg] = useState("");

    const formik = useFormik({
        initialValues: {
            loginString: "",
            password: "",
        },
        validationSchema: Yup.object({
            loginString: Yup.string()
                .required("Email id / Mobile no. is required")
                .test(
                    "is-valid-email-or-mobile",
                    "Please enter a valid email address or mobile number",
                    (value) => {
                        const emailPattern =
                            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
                        const mobilePattern = /^\d{10}$/;
                        return emailPattern.test(value) || mobilePattern.test(value);
                    }
                )
                .required("Email address or mobile number is required"),
            password: Yup.string().min(8).required("Password is required"),
        }),
        onSubmit: async () => {
            const { loginString, password } = formik?.values;
            // call to the login function
            try {
                let res = "";
                const encodePassword = encode(password?.toString());
                res = await api.get(
                    `/studentLogin?email=${loginString}&pass=${encodePassword}`
                );
                if (res?.status === 200) {
                    if (res?.data?.message == "Error Occured") {
                        setErrorMsg(res?.data?.msg);
                    } else {
                        await AsyncStorage.setItem("loginUser", res?.data?.userName);
                        await AsyncStorage.setItem("frontAuth", res?.data?.data);
                        await AsyncStorage.setItem("Guest", JSON.stringify(res?.data?.guest));
                        // setTimeout(() => {
                        navigation.navigate("Home");
                        // }, 3000);
                    }
                }
            } catch (error) {
                console.error('Axios error:', error.message);

                // Access more details
                console.log('Request:', error.config);
                console.log('Response:', error.response);
                console.log(error);
            }
        },
    });
    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: "#ffffff" }}
            showsVerticalScrollIndicator={false}>
            <ImageBackground
                source={require('../../images/background3.jpg')}
                style={{ height: Dimensions.get('window').height / 2.5 }}
            >
                <View style={styles.brandView}>
                    <Image
                        containerStyle={{}}
                        placeholderStyle={{}}
                        transitionDuration={1000}
                        source={require('../../images/MEDICAL_COLLEGE_LOGO_small.png')}
                        style={{ width: 100, height: 100, borderTopRightRadius: 50, borderTopLeftRadius: 50, borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}
                    />
                    {/* <Icon name='open-book' style={{ color: "#000000", fontSize: 100 }} /> */}
                    <Text style={{ color: "#000000", fontSize: 40, fontWeight: "bold" }}>EGMCB</Text>
                </View>
            </ImageBackground>
            <View style={{ marginBottom: -100 }}>
                {/* Welcome View */}
                <View style={styles.bottemView}>
                    <View style={{ padding: 40 }}>
                        <Text style={{ color: "#44caee", fontSize: 34 }}>Welcome back!</Text>
                        <Text style={{ marginTop: 10 }}>
                            Don't have an account?
                            <Text style={{ color: "red", fontStyle: "italic" }} onPress={() => navigation.navigate("SignUp")} >
                                {' '} Register now
                            </Text>
                        </Text>
                        <View style={{ marginTop: 10 }}>
                            <TextInput
                                style={{ marginTop: 40, borderBottomColor: "#ddd", borderBottomWidth: 1, paddingBottom: 15 }}
                                placeholder='E-mail/Mobile no'
                                keyboardType="email-address"
                                autoCapitalize='none'
                                maxLength={50}
                                onChangeText={formik.handleChange("loginString")}
                                onBlur={formik.handleBlur("loginString")}
                                value={formik?.values?.loginString}
                            />
                            {formik?.touched?.loginString && formik?.errors?.loginString && (
                                <Text style={{ color: "red" }}>
                                    {formik?.errors?.loginString}
                                </Text>
                            )}
                            <TextInput
                                style={{ marginTop: 40, borderBottomColor: "#ddd", borderBottomWidth: 1, paddingBottom: 15 }}
                                placeholder='Password'
                                maxLength={15}
                                secureTextEntry
                                autoCapitalize='none'
                                onChangeText={formik.handleChange("password")}
                                onBlur={formik.handleBlur("password")}
                                value={formik?.values?.password}
                            />
                            {formik?.touched?.password && formik?.errors?.password && (
                                <Text style={{ color: "red" }}>
                                    {formik?.errors?.password}
                                </Text>
                            )}
                        </View>
                        <View style={styles.forgotPassView}>
                            <View style={{ flex: 1, marginRight: -1 }}>
                                <Text style={{ color: "#8f9195", alignSelf: "flex-end" }} onPress={() => navigation.navigate("ForgottPassword")}>
                                    Forgot Password?
                                </Text>
                            </View>
                        </View>
                        <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity
                                style={{ width: 100, backgroundColor: '#44caee', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40 }}
                                onPress={formik.handleSubmit}>
                                <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 16 }}>Login</Text>
                            </TouchableOpacity>
                            {errorMsg && <Text style={{ color: "red" }}>{errorMsg}</Text>}
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView >
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    brandView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        bottom: 40
    },
    bottemView: {
        flex: 1.5,
        backgroundColor: "#ffffff",
        bottom: 80,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
    },
    loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#eaeaea",
        backgroundColor: "#fafafa",
        paddingLeft: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    forgotPassView: {
        height: 50,
        marginTop: 20,
        flexDirection: "row",
    },
})