/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createNativeStackNavigator } from '@react-navigation/native-stack';



// Screens
import home from "./Screens/home";
import menu from "./Screens/menu";
import pedidoEs from "./Screens/pedidoES";
import VerEstatus from "./Screens/VerEstatus";

const Tab = createBottomTabNavigator();


function NewTab() {
    return (

      <Tab.Navigator
      
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: 'black',
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={home} 
          options={{
            headerShown: false,
            tabBarLabel :'Inicio',
            tabBarIcon : ({color,size}) => (
                <Entypo name ='home' color = {color} size={size} />
            ),
          }}
          />
        <Tab.Screen 
          name="Menu" 
          component={menu} 
          options={{
            headerShown : false,
            tabBarLabel :'Menú',
            tabBarIcon : ({color,size}) => (
                <MaterialCommunityIcons name ='coffee-to-go-outline' color = {color} size={size} />
            ),
          }}
          />
        <Tab.Screen 
          name="Mi-Pedido" 
          component={pedidoEs} 
          options={{
            headerShown : false,
            tabBarLabel :'Mi Pedido',
            tabBarIcon : ({color,size}) => (
                <Entypo name ='shopping-cart' color = {color} size={size} />
            ),
          }}
          />
        <Tab.Screen 
          name="Estatus" 
          component={VerEstatus} 
          options={{
            headerShown : false,
            tabBarLabel :'Ver Estatus',
            tabBarIcon : ({color,size}) => (
                <Entypo name ='hour-glass' color = {color} size={size} />
            ),
          }}
          />

      </Tab.Navigator>
    );
  }
  
  export default function Navigation() {
    return (
      <NavigationContainer> 
        <NewTab />
      </NavigationContainer>
    );
  }