import { StyleSheet, Text, Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import colors from '../components/config/colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import { scale, verticalScale } from 'react-native-size-matters'
import Lottie from 'lottie-react-native';

export default function OrderCompleted({ route,navigation }) {
    const { name, includes } = route?.params

    return (
        <SafeAreaView style={styles.container}>

<TouchableOpacity style={[styles.backButton,]} onPress={() => { navigation.goBack() }}>

<Image source={require("../assets/back.png")} resizeMode="contain" style={styles.backicon} />
</TouchableOpacity>
            <Lottie style={{ height:verticalScale (120), alignSelf: 'center',marginTop:verticalScale(0) }}

                source={require('../assets/Animation/confirm.json')}
                autoPlay
                speed={0.5}
                loop={true} />


            <Lottie style={styles.lottie}
                source={require('../assets/Animation/data.json')}
                autoPlay
                speed={0.5}
                loop={true} />

                <Text style={styles.text}>{`Your order of coffee ${name} ${includes} hae been placed`}</Text>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dark
    },
    text: {
        color: colors.white,
        textAlign:"center",
        marginTop: verticalScale(25),
        marginLeft: scale(25),
        fontSize: 25,
        fontWeight: "700",
        width: "80%"


    },
    lottie: {
        height: verticalScale(250),
        width: scale(54),
        alignItems: "center",
        alignSelf: "center",
    },
    backButton: {
        backgroundColor: colors.light,
        height: verticalScale(35),
        width: scale(35),
        marginTop: verticalScale(18),
        marginLeft: scale(23),
        borderRadius: 12,
    
      },
      backicon: {
        width: scale(15),
        height: verticalScale(15),
        tintColor: colors.dark,
        alignSelf: "center",
        alignItems: "center",
        marginTop: verticalScale(10),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
      },
})