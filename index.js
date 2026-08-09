/**
 * @format
 */

import { registerRootComponent } from 'expo'; // <-- Faltaba esta línea
import App from './App';
import messaging from "@react-native-firebase/messaging";

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log("Message Handled in the background", remoteMessage);
});

registerRootComponent(App);