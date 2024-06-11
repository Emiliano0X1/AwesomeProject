/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


// Screens

import home from "./Screens/home";
import menu from "./Screens/menu.js";
import pedidoEs from "./Screens/pedidoES";
import VerEstatus from "./Screens/VerEstatus";

const tab = createBottomTabNavigator();

function newTab() {
    <tab.Navigator>
        <tab.Screen name ="Home" component={home}/>
        <tab.Screen name ="Ver Menú" component={menu}/>
        <tab.Screen name ="Ordene Aqui" component={pedidoEs}/>
        <tab.Screen name ="Ver Mi Pedido" component={VerEstatus} />
    </tab.Navigator>
}

