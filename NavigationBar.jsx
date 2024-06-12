/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// Screens
import Welcome from './Screens/welcome';
import home from "./Screens/home";
import menu from "./Screens/menu";
import pedidoEs from "./Screens/pedidoES";
import VerEstatus from "./Screens/VerEstatus";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function NewTab() {
    return (

      <Tab.Navigator
      
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: 'black',
        }}
      >
        <Tab.Screen name="Home" component={home} />
        <Tab.Screen name="Menú" component={menu} />
        <Tab.Screen name="Ordenar" component={pedidoEs} />
        <Tab.Screen name="Ver Mi Pedido" component={VerEstatus} />

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