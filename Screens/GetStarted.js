import { StyleSheet, Text, View, ImageBackground, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../components/config/colors'
import { scale, verticalScale } from 'react-native-size-matters'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'

export default function GetStarted() {
    const navigation=useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require("../assets/splash.jpg")} style={styles.container} resizeMode="cover">
                <Text>k</Text>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <View style={styles.bg}>
                    <Text style={styles.text}>Get Exceptional Taste in Every Drink</Text>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 12, width: "55%", color: colors.dark, marginTop: verticalScale(8) }]}>Order your best coffee with best flavour</Text>
                    <TouchableOpacity style={styles.Button} onPress={()=>{navigation.navigate("Home")}}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between"

    },
    bg: {
        backgroundColor: colors['white-smoke'],
        padding: 25,
        opacity: 0.7,
        marginBottom: verticalScale(35),
        marginHorizontal: scale(25),
        borderRadius: 12,

        // justifyContent:"flex-end"
    },
    text: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 16,
        width: "80%",
        textAlign: "center",
        alignSelf: "center"
    },
    Button: {
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: colors.primary,
        width: "90%",
        paddingVertical: 8,
        // height:verticalScale(22),
        borderRadius: 8,
        marginTop: verticalScale(20),

    },
    buttonText: {
        color: colors.white,
        textAlign: "center",
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: verticalScale(15),
    }
})