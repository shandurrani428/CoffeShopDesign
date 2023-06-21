import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import colors from './config/colors'
import { scale } from 'react-native-size-matters'

export default function Button({onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.Button}>Buy Now</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        width:"65%",
        borderRadius:15,
        marginRight:25

        
    },
    Button:{
        color:colors.white,
        textAlign:"center",
        fontWeight:"700",
        marginTop:8,
        fontSize:18,
    }
})