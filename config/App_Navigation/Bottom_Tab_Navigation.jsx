import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Home';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome  from 'react-native-vector-icons/FontAwesome'
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5'

import Carts from '../../Screens/Carts';
import Products from '../../Screens/Products';
import Browser from '../../Screens/Browser';

const Tab = createBottomTabNavigator();

const Bottom_Tab_Navigation = () => {
  return (    
   <Tab.Navigator  

   
   initialRouteName='Home'
   
   screenOptions={{
    
    tabBarActiveTintColor:'white',
    tabBarInactiveTintColor:'white    ',
    tabBarActiveBackgroundColor:'black',
    tabBarInactiveBackgroundColor:'#090642'
   }}
   
   >
    <Tab.Screen options={{
       headerShown: false,
      tabBarIcon:({color})=>{
        return <Ionicons color={color} name = 'home-outline' size= {25}/>;
      },
    }}  name='Home' component={Home} />
    <Tab.Screen 
    options={{
      headerShown: false,
      tabBarIcon:({color})=>{
        return <FontAwesome color={color} name='search' size={25} />
      }
    }}
     name='Browser' component={Browser} />
    <Tab.Screen
     options={{
      headerShown: false,

      tabBarIcon:({color})=>{
        return <AntDesign color={color} name='shoppingcart' size={25} />
      }
    }}
    name='Carts' component={Carts} />
    <Tab.Screen
     options={{
      tabBarIcon:({color})=>{
        return <FontAwesome5 color={color} name='clipboard-list' size={25} />
      }
    }}
    name='Oders' component={Products} />
    <Tab.Screen
     options={{
      tabBarIcon:({color})=>{
        return <Ionicons color={color} name='person-circle-outline' size={25} />
      }
    }}
    name='Account' component={Products} />

   </Tab.Navigator>
  )
}

export  {Bottom_Tab_Navigation}