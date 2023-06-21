import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import { scale, verticalScale } from 'react-native-size-matters';


export default function Header() {
  return (
    <View style={[styles.header, styles.style]}>
      <TouchableOpacity style={styles.iconView}>
        <Image
          source={require('../../assets/menu.png')}
          resizeMode="contain"
          style={styles.menu}
        />
      </TouchableOpacity>
      <View >
        <Image
          source={require('../../assets/profile.jpg')}
          resizeMode="contain"
          style={styles.profile}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  iconView: {
    marginTop: verticalScale(5),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(45),
    marginHorizontal: scale(25),
  },
  menu: {
    tintColor: 'gray',
    width: scale(25),
    height: verticalScale(25),
    alignItems: 'center',
    alignSelf: 'center',
  },

  profile: {
    width: scale(35),
    height: verticalScale(35),
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
})