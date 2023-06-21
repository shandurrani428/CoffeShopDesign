import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoffeeDetail from './Screens/CoffeeDetail';
import OrderCompleted from './Screens/OrderCompleted';
import GetStarted from './Screens/GetStarted';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator  initialRouteName='GetStarted' screenOptions={{
        headerShown: false,
      }}  >
                <Stack.Screen  name='GetStarted' component={GetStarted}/>

        <Stack.Screen  name='Home' component={Home}/>
      
      <Stack.Screen  name='CoffeeDetail' component={CoffeeDetail}/>
      <Stack.Screen  name='OrderCompleted' component={OrderCompleted}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})