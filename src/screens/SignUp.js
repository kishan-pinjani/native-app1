import { StyleSheet, Text, View } from 'react-native'
import * as DocumentPicker from 'expo-document-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignUp = () => {
    const selectDoc = async () => {
        try {
            const doc = await DocumentPicker.getDocumentAsync();
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
        <View style={styles.container}>
            <Text style={styles.title}>SignUp</Text>
            <TouchableOpacity style={styles.button} onPress={selectDoc}>
                <Text style={styles.buttonText}>Choose a File</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
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
    button: {
        backgroundColor: '#3498db',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})