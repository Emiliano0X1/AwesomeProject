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
import mainMenu from "./Screens/menu";
import pedidoEs from "./Screens/pedidoES";
import VerEstatus from "./Screens/VerEstatus";


// subScreens
import hotDrinks from "./Screens/productsScreen/hotDrinks";
import frappes from "./Screens/productsScreen/frappes";
import tes from "./Screens/productsScreen/tes";
import tisanas from "./Screens/productsScreen/tisanas";
import smothies from "./Screens/productsScreen/Smothies";
import sodasItalianas from "./Screens/productsScreen/sodasItalianas";
import refrescantes from "./Screens/productsScreen/refrescantes";
import wafles from "./Screens/productsScreen/wafles";
import postres from "./Screens/productsScreen/postres";

//Extra sCREENS

import defaultExtra from "./Screens/extraScreen/defaultExtra";
import milks from "./Screens/extraScreen/withMilk";
import frappeExtra from "./Screens/extraScreen/frappeExtra";
import toppingExtra from "./Screens/extraScreen/topping";

//Loggin Screens

import Welcome from './Screens/welcome';
import Login from './Screens/Login';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function extraScreen () {
  return (
      <Stack.Navigator initialRouteName = 'HotDrinks'>
        <Stack.Screen
          name = 'Menu'
          component = {mainMenu}
          options={{ headerShown: false }} 
        />
         <Stack.Screen
          name = 'defaultExtra'
          component = {defaultExtra}
        />  
        <Stack.Screen
          name = 'WithMilk'
          component = {milks}
        />  
      </Stack.Navigator>
  );
};

function MenuStack () {
    return (
        <Stack.Navigator initialRouteName = 'menu'>
          <Stack.Screen
            name = 'MainMenu'
            component = {mainMenu}
            options={{ headerShown: false }} 
          />
           <Stack.Screen
            name = 'HotDrinks'
            component = {hotDrinks}
          />
           <Stack.Screen
            name = 'Frappes'
            component = {frappes}
          />
          <Stack.Screen
            name = 'Tes'
            component = {tes}
          />
          <Stack.Screen
            name = 'Tisanas'
            component = {tisanas}
          />
          <Stack.Screen
            name = 'Smoothies'
            component = {smothies}
          />
          <Stack.Screen
            name = 'SodasItalianas'
            component = {sodasItalianas}
          />
          <Stack.Screen
            name = 'Refrescantes'
            component = {refrescantes}
          />
           <Stack.Screen
            name = 'Wafles'
            component = {wafles}
          />
           <Stack.Screen
            name = 'Postres'
            component = {postres}
          />

          <Stack.Screen
          name = 'defaultExtra'
          component = {defaultExtra}
          />  
          <Stack.Screen
          name = 'withMilk'
          component = {milks}
          /> 
          <Stack.Screen
          name = 'frappeExtra'
          component = {frappeExtra}
          /> 
          <Stack.Screen
          name = 'toppingExtra'
          component = {toppingExtra}
          /> 
          
        </Stack.Navigator>
    );
}

function TabNavigator () {

  return(
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
    component={MenuStack} 
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
)}

function NewTab() {
    return (
    <Stack.Navigator initialRouteName='welcome'>

      <Stack.Screen
          name = 'welcome'
          component={Welcome}
          options= {{headerShown:false}}
      />

      <Stack.Screen 
          name = 'login'
          component={Login}
          options={{headerShown : false}}
      />


      <Stack.Screen
          name = 'Main'
          component={TabNavigator}
          options={{headerShown : false}}
      />

      </Stack.Navigator>
    );
  }
  
  export default function Navigation() {
    return (
      <NavigationContainer> 
        <NewTab />
      </NavigationContainer>
    );
  }