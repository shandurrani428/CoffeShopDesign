import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from './config/colors'
import SPACING from './config/SPACING'
import { scale, verticalScale } from 'react-native-size-matters'
import coffees from './config/coffees'

export default function CatagoriesView({ setFilteredData, activeText, setActiveText, data, filteredData }) {
  return (
    <View style={styles.parentContainer}>
      <TouchableOpacity style={styles.container} onPress={() => {
        setActiveText(data?.name)
        if (data?.name === "All") {
          setFilteredData(coffees)
        } else {
          setFilteredData(coffees.filter((val) => val.name == data.name))

        }
      }}>




        <Text style={[styles.text, data?.name == activeText && { color: colors.primary }]} >{data?.name}</Text>



      </TouchableOpacity>
      {
        data?.name == activeText && <View style={styles.circle}>

        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(25),

  },
  parentContainer: {
    height: verticalScale(80),

  },
  text: {
    color: colors.light,
    marginHorizontal: 12,
    fontSize: 18,
    fontWeight: "600"
  },
  circle: {
    borderRadius: 100,
    backgroundColor: colors.primary,
    padding: 5,
    position: "absolute",
    marginTop: verticalScale(55),
    alignSelf: "center"

  }
})