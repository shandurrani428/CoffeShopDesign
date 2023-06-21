import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import colors from '../components/config/colors';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import coffees from '../components/config/coffees';
import Button from '../components/Button';
const { height, width } = Dimensions.get('window')

export default function CoffeeDetail({route}) {
  const { image, name,includes,rating,description,price } = route?.params
  const navigation = useNavigation()
  const [seeMore, setseeMore] = useState(true);
const [activeS, setactiveS] = useState("S")
   const size=[
    {size:"S"},{size:"M"},{size:"L"},
  ]
  // console.log(coffees[0]?.description.length)
  const handlePressSeeMore = () => {
    setseeMore(!seeMore);
  };
  return (
    <View style={styles.conatiner}>
      <View style={styles.imagebg}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          // borderBottomRightRadius={25}
          // borderBottomLeftRadius={25}
          borderRadius={25}

          style={styles.image}>
          <View style={styles.header}>
            <TouchableOpacity style={[styles.backButton, styles.shadow]} onPress={() => { navigation.goBack() }}>

              <Image source={require("../assets/back.png")} resizeMode="contain" style={styles.backicon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.heartButton} >

              <Image source={require("../assets/like.png")} resizeMode="contain" style={styles.heart} />
            </TouchableOpacity>
          </View>
          <View style={styles.blurvieww}>
            <View>
              <Text style={styles.text}>{name}</Text>
              <Text style={styles.subtext}>{includes}</Text>
              <View style={styles.starView}>
                <Image source={require("../assets/star.png")} resizeMode="contain" style={styles.coffe} />
                <Text style={styles.starText}>{rating}{'   '}
                  <Text style={[styles.subtext, { fontWeight: "300" }]}>{`(${6},${986})`}</Text>

                </Text>

              </View>
            </View>

            <View>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.coffeiconview} >

                  <Image source={require("../assets/coffees.png")} resizeMode="contain" style={styles.coffe} />
                  <Text style={styles.coffetext}>Coffe</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.coffeiconview]} >

                  <Image source={require("../assets/milk.png")} resizeMode="contain" style={styles.coffe} />
                  <Text style={styles.coffetext}>Milk</Text>
                </TouchableOpacity>
                <View>
                </View>

              </View>
              <TouchableOpacity style={styles.tt} >

                <Text style={styles.coffetext}>Medium Roasted</Text>
              </TouchableOpacity>

            </View>

          </View>
        </ImageBackground>
      


      </View>
      <ScrollView>
      <View style={styles.descriptionView}>
      <Text style={[styles.subtext, {  fontSize: 15 }]}>Description</Text>


<Text style={[styles.description]} onPress={() => {
  handlePressSeeMore();
}}>

  {seeMore == true && description.length >= 100
    ? ` ${description.slice(0, 60)} `
    : `  ${description} `}
  <Text style={[styles.subtext, { color: colors.primary, }]}>
    {seeMore == true &&
      description.length >= 100
      ? '...Read More'
      : `${description.length <= 100
        ? ''
        : 'Read Less'
      }`}
  </Text></Text>
      </View>
      <Text style={[styles.subtext, { marginLeft: 24 , }]}>Size</Text>

      <View style={{marginLeft:scale(12)}}>
      <FlatList
           horizontal={true}
          data={size}
          renderItem={({item}) => 
          
          <TouchableOpacity style={[styles.size,{borderWidth:activeS==item?.size? 1:0, borderColor:activeS==item?.size?colors.primary:"transparent", backgroundColor:activeS==item?.size?colors.dark:colors?.['dark-light'] }]} onPress={()=>{setactiveS(item?.size)}}>
          <Text style={styles.sizetext}>{item.size}</Text>
        </TouchableOpacity>  }
          // keyExtractor={item => item.id}
          
         
        />
        </View>
    
      <View style={styles.priceView}>
        <View>
          <Text style={[styles.subtext, { textAlign: "center" }]}>Price</Text>
          <Text style={[styles.text, { color: colors.primary }]}>$ <Text style={{ color: colors.white }}>{price}</Text></Text>

        </View>
        <Button  onPress={()=>{navigation.navigate("OrderCompleted",{
name:name,
includes:includes

        })}}/>

      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: colors.dark,
    justifyContent: "space-between",


  },
  imagebg: {
    margin: moderateScale(18),
    paddingTop: 12,

  },
  image: {
    width: '100%',
    height: verticalScale(390),
    // flex: 1,
    //  marginLeft:scale(12),
    //  paddingRight: scale(25),

    justifyContent: "space-between",



  },
  backButton: {
    backgroundColor: colors.dark,
    height: verticalScale(35),
    width: scale(35),
    marginTop: verticalScale(18),
    marginLeft: scale(23),
    borderRadius: 12,

  },
  backicon: {
    width: scale(15),
    height: verticalScale(15),
    tintColor: colors.light,
    alignSelf: "center",
    alignItems: "center",
    marginTop: verticalScale(10),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  heart: {
    width: scale(15),
    height: verticalScale(15),
    tintColor: colors.light,
    alignSelf: "center",
    alignItems: "center",
    marginTop: verticalScale(10),
  },
  heartButton: {
    backgroundColor: colors.dark,
    height: verticalScale(35),
    width: scale(35),
    marginTop: verticalScale(18),
    marginRight: scale(23),
    borderRadius: 12,
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  blurContainer: {

  },
  blurvieww: {

    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",

    marginBottom: verticalScale(0),
    backgroundColor: colors.dark,
    opacity: 0.8,
    padding: 12,
    borderRadius: 15,

  },
  text: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 20
  },
  coffeiconview: {
    backgroundColor: colors.dark,
    height: verticalScale(50),
    width: scale(50),
    // marginTop: verticalScale(42),
    marginRight: scale(13),
    borderRadius: 12,

  },
  coffe: {
    width: scale(15),
    height: verticalScale(15),
    tintColor: colors.light,
    alignSelf: "center",
    alignItems: "center",
    marginTop: verticalScale(10),
    tintColor: colors.primary

  },
  coffetext: {
    color: colors['white-smoke'],
    textAlign: "center",
    fontSize: 12,
    marginTop: 3,
    marginBottom: 4

  },
  subtext: {
    color: colors['white-smoke'],
    // fontWeight: "700",
    // fontSize: 2
  },
  starView: {
    flexDirection: "row",
    marginTop: verticalScale(12)
  },
  starText: {
    color: colors.white,
    textAlign: "center",
    marginTop: verticalScale(12),
    marginLeft: scale(12),
    fontSize: 16,
    fontWeight: "700"
  },
  tt: {
    backgroundColor: colors.dark,
    marginTop: verticalScale(12),
    padding: moderateScale(5),
    borderRadius: 12,
  },
  description: {
    color: colors.white,
    marginTop: verticalScale(5),
    textAlign: "left",
    width: "85%"

  },
  priceView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: scale(25),
    marginBottom: verticalScale(15)
  },
  size: {
    backgroundColor: colors['dark-light'],

    width: scale(95),
    height: verticalScale(30),
    borderRadius: 7,
    marginTop:verticalScale(8),
    marginLeft:12,
    marginBottom:verticalScale(45),



  },
  sizetext: {
    textAlign: "center",
    color: colors['white-smoke'],
    marginTop: verticalScale(5),
    fontSize: 15
  },
  descriptionView:{
    marginLeft:scale(25),
    // marginTop:verticalScale(-15),
    marginBottom:verticalScale(12)
  }
 
});
