import { Dimensions, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import * as DocumentPicker from 'expo-document-picker';
import Icon from 'react-native-vector-icons/Entypo';
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from 'react';
import { CheckBox, Image } from "react-native-elements";

const SignUp = ({ navigation }) => {
    const [valueForBatch, setValueForBatch] = useState(null);
    const [valueForState, setValueForState] = useState(null);
    const [asGuest, setAsGuest] = useState(false);

    const dataForBatch = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
    ];
    const dataForState = [
        { label: 'Andhra Pradesh', value: 'Andhra Pradesh' },
        { label: 'Andaman and Nicobar Islands', value: 'Andaman and Nicobar Islands' },
        { label: 'Arunachal Pradesh', value: 'Arunachal Pradesh' },
        { label: 'Bihar', value: 'Bihar' },
        { label: 'Chandigarh', value: 'Chandigarh' },
        { label: 'Chhattisgarh', value: 'Chhattisgarh' },
        { label: 'Dadar and Nagar Haveli', value: 'Dadar and Nagar Haveli' },
        { label: 'Daman and Diu', value: 'Daman and Diu' },
        { label: 'Delhi', value: 'Delhi' },
        { label: 'Lakshadweep', value: 'Lakshadweep' },
        { label: 'Puducherry', value: 'Puducherry' },
        { label: 'Goa', value: 'Goa' },
        { label: 'Gujarat', value: 'Gujarat' },
        { label: 'Haryana', value: 'Haryana' },
        { label: 'Himachal Pradesh', value: 'Himachal Pradesh' },
        { label: 'Jammu and Kashmir', value: 'Jammu and Kashmir' },
        { label: 'Jharkhand', value: 'Jharkhand' },
        { label: 'Karnataka', value: 'Karnataka' },
        { label: 'Kerala', value: 'Kerala' },
        { label: 'Madhya Pradesh', value: 'Madhya Pradesh' },
        { label: 'Maharashtra', value: 'Maharashtra' },
        { label: 'Manipur', value: 'Manipur' },
        { label: 'Meghalaya', value: 'Meghalaya' },
        { label: 'Mizoram', value: 'Mizoram' },
        { label: 'Nagaland', value: 'Nagaland' },
        { label: 'Odisha', value: 'Odisha' },
        { label: 'Punjab', value: 'Punjab' },
        { label: 'Rajasthan', value: 'Rajasthan' },
        { label: 'Sikkim', value: 'Sikkim' },
        { label: 'Tamil Nadu', value: 'Tamil Nadu' },
        { label: 'Telangana', value: 'Telangana' },
        { label: 'Tripura', value: 'Tripura' },
        { label: 'Uttar Pradesh', value: 'Uttar Pradesh' },
        { label: 'Uttarakhand', value: 'Uttarakhand' },
        { label: 'West Bengal', value: 'West Bengal' },
    ]
    const selectDoc = async () => {
        try {
            const doc = await DocumentPicker.getDocumentAsync({
                type: 'image/*'
            });
            console.log(doc);
            if (doc.type === 'cancel') {
                console.log('Document picking cancelled');
            } else {
                console.log(doc);
            }
        } catch (error) {
            console.log(error);
        }
    }

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
                        <Text style={{ color: "#44caee", fontSize: 34 }}>Welcome !</Text>
                        <Text style={{ marginTop: 10 }}>
                            Already have an account?
                            <Text style={{ color: "red", fontStyle: "italic" }} onPress={() => navigation.navigate("LoginScreen")}>
                                {' '} Login now
                            </Text>
                        </Text>
                        <View style={{ marginTop: 10 }}>
                            <TextInput
                                style={{ marginTop: 40, borderBottomColor: "#ddd", borderBottomWidth: 1, paddingBottom: 15 }}
                                placeholder='UserName*'
                                autoCapitalize='none'
                                maxLength={50}
                            />
                            <TextInput
                                style={{ marginTop: 40, borderBottomColor: "#ddd", borderBottomWidth: 1, paddingBottom: 15 }}
                                placeholder='E-mail Address*'
                                keyboardType="email-address"
                                autoCapitalize='none'
                                maxLength={50}
                            />
                            <TextInput
                                style={{ marginTop: 40, borderBottomColor: "#ddd", borderBottomWidth: 1, paddingBottom: 15 }}
                                placeholder='Mobile no*'
                                keyboardType="number-pad"
                                autoCapitalize='none'
                                maxLength={50}
                            />
                            <Text style={{ marginTop: 40 }}>Select Batch*</Text>
                            <Dropdown
                                style={styles.dropdown}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={dataForBatch}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder='Select Batch'
                                searchPlaceholder="Search..."
                                onChange={item => {
                                    setValueForBatch(item.value);
                                }}
                                value={valueForBatch}
                            />
                            <TextInput
                                style={{ marginTop: 40, borderBottomColor: "#ddd", borderBottomWidth: 1, paddingBottom: 15 }}
                                placeholder='School/collage*'
                                autoCapitalize='none'
                                maxLength={50}
                            />
                            <Text style={{ marginTop: 40 }}>Upload your image*</Text>
                            <TouchableOpacity style={styles.fileInputButton} onPress={selectDoc}>
                                <Text style={styles.buttonText}>Choose a File</Text>
                            </TouchableOpacity>
                            <TextInput
                                style={{ marginTop: 40, borderBottomColor: "#ddd", borderBottomWidth: 1, paddingBottom: 15 }}
                                placeholder='Year Of Study*'
                                keyboardType="number-pad"
                                autoCapitalize='none'
                                maxLength={50}
                            />
                            {asGuest &&
                                <TextInput
                                    style={{ marginTop: 40, borderBottomColor: "#ddd", borderBottomWidth: 1, paddingBottom: 15 }}
                                    placeholder='Guest Code*'
                                    autoCapitalize='none'
                                    maxLength={20}
                                />}
                            <View style={{ marginTop: 40, marginLeft: -10 }}>
                                <CheckBox
                                    checked={asGuest}
                                    checkedColor="#0F0"
                                    checkedTitle="Great!"
                                    containerStyle={{ width: "100%" }}
                                    onIconPress={() => setAsGuest(!asGuest)}
                                    onLongIconPress={() =>
                                        console.log("onLongIconPress()")
                                    }
                                    onLongPress={() => console.log("onLongPress()")}
                                    onPress={() => console.log("onPress()")}
                                    size={30}
                                    textStyle={{}}
                                    title="Register as Guest"
                                    titleProps={{}}
                                    uncheckedColor="#F00"
                                />
                            </View>
                            <TextInput
                                style={{ marginTop: 40, borderBottomColor: "#ddd", borderBottomWidth: 1, paddingBottom: 15 }}
                                placeholder='Address*'
                                autoCapitalize='none'
                                maxLength={50}
                            />
                            <TextInput
                                style={{ marginTop: 40, borderBottomColor: "#ddd", borderBottomWidth: 1, paddingBottom: 15 }}
                                placeholder='City*'
                                autoCapitalize='none'
                                maxLength={50}
                            />
                            <Text style={{ marginTop: 40 }}>Select State*</Text>
                            <Dropdown
                                style={styles.dropdown}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={dataForState}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder='Select State'
                                searchPlaceholder="Search..."
                                onChange={item => {
                                    setValueForState(item.value);
                                }}
                                value={valueForState}
                            />
                            <TextInput
                                style={{ marginTop: 40, borderBottomColor: "#ddd", borderBottomWidth: 1, paddingBottom: 15 }}
                                placeholder='Country*'
                                autoCapitalize='none'
                                maxLength={50}
                            />
                            <TextInput
                                style={{ marginTop: 40, borderBottomColor: "#ddd", borderBottomWidth: 1, paddingBottom: 15 }}
                                placeholder='Password*'
                                maxLength={15}
                                secureTextEntry
                                autoCapitalize='none'
                            />
                            <TextInput
                                style={{ marginTop: 40, borderBottomColor: "#ddd", borderBottomWidth: 1, paddingBottom: 15 }}
                                placeholder='confirm Password*'
                                maxLength={15}
                                secureTextEntry
                                autoCapitalize='none'
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

export default SignUp

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
    dropdown: {
        marginTop: 20,
        paddingBottom: 15,
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: '#333',
    },
    fileInputButton: {
        marginTop: 10,
        paddingVertical: 15,
        paddingHorizontal: 5,
        borderRadius: 8,
        borderBottomColor: "#ddd",
        borderBottomWidth: 1,
    },
    buttonText: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 8,
        backgroundColor: '#e9e9ed', // Background color for the button
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        color: '#000000',
        fontSize: 14,
        fontWeight: 'bold',
    },
})