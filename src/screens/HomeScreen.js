import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from "react-native-elements";

const HomeScreen = ({ navigation }) => {
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