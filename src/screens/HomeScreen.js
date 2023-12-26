import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
    const [userName, setUserName] = useState("")
    const getToken = async () => {
        const loginUser = await AsyncStorage.getItem("loginUser")
        setUserName(loginUser)
    }
    useEffect(() => {
        getToken()
    }, [])

    return (
        <>
            <View style={styles.container}>
                <Text>Hello Everyone! this is Home screen of this apllication.</Text>
                <Button
                    buttonStyle={{ width: 150 }}
                    containerStyle={{ margin: 5 }}
                    disabledStyle={{
                        borderWidth: 2,
                        borderColor: "#00F"
                    }}
                    disabledTitleStyle={{ color: "#00F" }}
                    linearGradientProps={null}
                    iconContainerStyle={{ background: "#000" }}
                    loadingProps={{ animating: true }}
                    loadingStyle={{}}
                    onPress={() => navigation.navigate("First")}
                    title="Go to First Screen"
                    titleProps={{}}
                    titleStyle={{ marginHorizontal: 5 }}
                    type="outline"
                />
                <Text style={{ fontWeight: "bold" }}>User Name : - {userName} </Text>
                {/* <Text>{AsyncStorage.getItem("loginUser")}</Text>
                <Text>{AsyncStorage.getItem("frontAuth")}</Text>
                <Text>{AsyncStorage.getItem("Guest")}</Text> */}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen