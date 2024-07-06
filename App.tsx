/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React ,{useState} from 'react';
import {StyleSheet, Text, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import NavigationBar from './NavigationBar';
import { OrderProvider } from './Screens/context';

const CafettoApp = () => {
  return (
    <OrderProvider>
      <NavigationBar />
    </OrderProvider>
  );
}

export default CafettoApp;