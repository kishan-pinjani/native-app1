import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Button, Card } from "react-native-elements";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from '../utills/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { encode } from 'base-64';

const Form = ({ navigation }) => {

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
        <>
            <Card containerStyle={{}} wrapperStyle={{}}>
                <Card.Title>SIGN IN</Card.Title>
                <Card.Divider />
                <View style={{ position: "relative" }}>

                    <TextInput
                        style={styles.textinput}
                        placeholder='Enter Your Email'
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
                        style={styles.textinput}
                        placeholder='Enter Your Password'
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
                    <Button title="Sign In" onPress={formik.handleSubmit} />
                    {errorMsg && <Text style={{ color: "red" }}>{errorMsg}</Text>}
                </View>
            </Card>
        </>
    )
}

const styles = StyleSheet.create({
    textinput: {
        fontSize: 12,
        borderWidth: 2,
        borderColor: 'blue',
        margin: 10,
        padding: 10
    }
})

export default Form