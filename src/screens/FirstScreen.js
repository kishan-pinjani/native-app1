import { StyleSheet, Text, View } from 'react-native';
import { Button } from "react-native-elements";

const FirstScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Hello Everyone! this is first screen of this apllication.</Text>
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
                onPress={() => navigation.navigate("Second")}
                title="Go to Second Screen"
                titleProps={{}}
                titleStyle={{ marginHorizontal: 5 }}
                type="outline"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default FirstScreen