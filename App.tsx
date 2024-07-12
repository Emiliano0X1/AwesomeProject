/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import  Navigation  from './NavigationBar';
import { OrderProvider } from './Screens/context';

const CafettoApp = () => {
  return (
    <OrderProvider>
      <Navigation />
    </OrderProvider>
  );
}

export default CafettoApp;