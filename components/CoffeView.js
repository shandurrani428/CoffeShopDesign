import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {BlurView} from '@react-native-community/blur';
import colors from './config/colors';
import {scale, verticalScale} from 'react-native-size-matters';

export default function CoffeView({data,onPress}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical:8,
        paddingHorizontal:scale (10),

      }}>
        
      <TouchableOpacity style={styles.conatiner} onPress={onPress}>
        <Image
        //   source={require('../assets/coffees/fahmi-fakhrudin-nzyzAUsbV0M-unsplash.jpg')}
        source={data?.image}
          resizeMode="contain"
          style={styles.coffe}
        />
        <Text style={styles.title}>{data?.name}</Text>
        <Text style={styles.subText}>{data?.included}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.dollar}>
            $ {''}
            <Text style={styles.price}>{data?.price}</Text>
          </Text>
          <View style={styles.plus}>
            <Image
              source={require('../assets/plus.png')}
              resizeMode="contain"
              style={styles.plusimg}
            />
          </View>
        </View>
      </TouchableOpacity>
  
    </View>
  );
}

const styles = StyleSheet.create({
  blurContainer: {
    backgroundColor: 'red',
    padding: 10,
  },
  conatiner: {
    backgroundColor: colors['dark-light'],
    padding: 8,
    borderRadius: 15,
  },
  coffe: {
    width: scale(130),
    height: verticalScale(110),
    alignSelf: 'center',
    borderRadius: 15,
  },
  title: {
    color: colors.white,
    fontSize: 15,
    marginLeft: scale(8),
    marginTop: verticalScale(5),
  },
  subText: {
    color: colors['white-smoke'],
    marginLeft: scale(8),
  },
  dollar: {
    marginLeft: scale(8),
    marginTop: verticalScale(12),
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 20,
  },
  price: {
    color: colors.white,
    fontWeight: '600',
  },
  plus: {
    backgroundColor: colors.primary,
    borderRadius: 15,
    padding: 8,
    marginTop: 12,
    alignSelf: 'center',
  },
  plusimg: {
    width: 10,
    height: 10,
    tintColor: 'white',
    alignSelf: 'center',
  },
});
