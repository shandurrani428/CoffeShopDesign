import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import colors from './config/colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Ionicons} from 'react-native-vector-icons';
export default function Searchbar({handleSearch, searchText}) {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Image
          source={require('../assets/search.png')}
          resizeMode="contain"
          style={styles.searchbar}
        />
        <TextInput
          style={styles.input}
          onChangeText={handleSearch}
          value={searchText}
          placeholder="Find Your Coffe.."
          placeholderTextColor={colors.light}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors['dark-light'],
    marginHorizontal: scale(20),
    marginTop: verticalScale(25),
    // padding: moderateScale(3),
    borderRadius: 15,
  },
  search: {
    flexDirection: 'row',
  },
  searchbar: {
    width: scale(22),
    height: verticalScale(25),
    alignItems: 'center', // position:"absolute",
    alignSelf: 'center',
    marginLeft: 22,
    tintColor: colors.light,
  },
  input: {
    marginLeft: scale(15),
    color: colors.white,
  },
});
