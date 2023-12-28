import { Dimensions, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Image } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Entypo';

const ForgottPassword = ({ navigation }) => {
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
                        <Text style={{ color: "#44caee", fontSize: 34 }}>Fogot Password?</Text>
                        <Text style={{ marginTop: 10 }}>
                            Remember your password?
                            <Text style={{ color: "red", fontStyle: "italic" }} onPress={() => navigation.navigate("LoginScreen")} >
                                {' '} Login now
                            </Text>
                        </Text>
                        <View style={{ marginTop: 10 }}>
                            <TextInput
                                style={{ marginTop: 40, borderBottomColor: "#ddd", borderBottomWidth: 1, paddingBottom: 15 }}
                                placeholder='Mobile no'
                                keyboardType="number-pad"
                                maxLength={10}
                            />
                        </View>
                        <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity
                                style={{ width: 100, backgroundColor: '#44caee', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40 }}
                            >
                                <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 16 }}>Send OTP</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView >
    )
}

export default ForgottPassword

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
    }
})