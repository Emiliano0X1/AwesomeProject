/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import  Navigation  from './NavigationBar';
import { OrderProvider } from './Screens/context';
import { AuthProvider } from './Screens/authContext';

const CafettoApp = () => {
  return (
  <AuthProvider>
    <OrderProvider>
      <Navigation />
    </OrderProvider>
  </AuthProvider>
  );
}

export default CafettoApp;