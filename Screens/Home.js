import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import colors from '../components/config/colors';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Header from '../components/config/Header';
import Searchbar from '../components/Searchbar';
import categories from '../components/config/categories';
import CatagoriesView from '../components/CatagoriesView';
import axios from 'axios';
import CoffeView from '../components/CoffeView';
import coffees from '../components/config/coffees';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const [activeText, setActiveText] = useState(categories[0]?.name);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(coffees);


  const navigation = useNavigation()


  const handleSearch = text => {
    setSearchText(text);

    const filteredItems = coffees.filter(
      item =>
        item?.name.toLowerCase().includes(text.toLowerCase()) ||
        item?.price.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredData(filteredItems);
  };


  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No Coffe Found</Text>
    </View>
  );

  return (

    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <Header />
      <Text style={styles.text}>Find the best coffee for you</Text>
      <Searchbar handleSearch={handleSearch} searchText={searchText} />
      <View style={{ marginLeft: scale(15), marginBottom: verticalScale(355) }}>
        <FlatList
          horizontal={true}
          data={categories}
          renderItem={({ item }) => (
            <CatagoriesView
              data={item}
              activeText={activeText}
              setActiveText={setActiveText}
              filteredData={filteredData}
              setFilteredData={setFilteredData}

            />
          )}
          keyExtractor={item => item.id}
        />
        <FlatList
          //  horizontal={true}
          data={filteredData}
          numColumns={2}
          renderItem={({ item }) => <CoffeView data={item} onPress={() => {
            navigation.navigate("CoffeeDetail", {
              image: item?.image,
              name: item?.name,
              includes: item?.included,
              rating: item?.rating,
              description: item?.description,
              price: item?.price
            })
          }} />}
          keyExtractor={item => item.id}
          ListEmptyComponent={renderEmptyList}


        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },

  text: {
    color: colors.white,
    fontSize: moderateScale(35),
    fontWeight: '700',
    width: '80%',
    marginLeft: scale(25),
    marginTop: verticalScale(25),
    // alignItems:"center",
  },
  emptyText: {
    fontSize: 25,
    color: colors.white,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(55),
  },
});
