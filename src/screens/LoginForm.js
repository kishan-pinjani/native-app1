import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LoginForm = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 25, marginTop: 20 }}>Welcome !</Text>
            <Text style={{ fontSize: 22, color: "grey", marginTop: 20 }}>Sign in to continue !</Text>
            <TextInput
                style={{ marginTop: 40, borderBottomColor: "#ddd", borderBottomWidth: 1, paddingBottom: 20 }}
                placeholder='UserName'
            />
            <TextInput
                style={{ marginTop: 40, borderBottomColor: "#ddd", borderBottomWidth: 1, paddingBottom: 20 }}
                placeholder='Password'
            />
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
                <TouchableOpacity style={{ width: 200, backgroundColor: '#0d47a1', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 30 }}>
                    <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 16 }}>Login Now</Text>
                </TouchableOpacity>

                <Text style={{
                    marginTop: 20,
                }}>Forgot Password ?</Text>
                <View style={{ flexDirection: 'row', marginTop: 40 }}>
                    <Text style={{
                        color: 'grey'
                    }}>Don't Have an Account ?</Text>
                    <Text style={{
                        fontWeight: 'bold',
                    }}>Sign Up</Text>
                </View>
            </View>
        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    }
})